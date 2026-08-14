import { useState, type FormEvent } from "react";
import { useI18n } from "../i18n/I18nContext";
import { track } from "../lib/track";

/**
 * Replace with the real Formspree endpoint for this form before going live:
 * https://formspree.io/f/{your-form-id}
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

function Choice({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors duration-500"
      style={{
        borderColor: selected ? "var(--color-primary)" : "var(--color-border)",
        color: selected ? "var(--color-primary)" : "var(--color-foreground)",
        opacity: selected ? 1 : 0.7,
      }}
    >
      {label}
    </button>
  );
}

type Status = "idle" | "sending" | "ok" | "error";

export default function Apply() {
  const { t } = useI18n();
  const a = t.apply;

  const [occasion, setOccasion] = useState<string>("");
  const [route, setRoute] = useState<string>("");
  const [heard, setHeard] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill every field; humans never see this one.
    if (data.get("company")) {
      setStatus("ok");
      return;
    }

    data.set("occasion", occasion);
    data.set("route", route);
    data.set("heard", heard);

    setStatus("sending");
    track("form_submit_attempt", { form: "private_application" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        track("form_submit_success", { form: "private_application" });
        form.reset();
        setOccasion("");
        setRoute("");
        setHeard("");
      } else {
        setStatus("error");
        track("form_submit_error", { form: "private_application" });
      }
    } catch {
      setStatus("error");
      track("form_submit_error", { form: "private_application" });
    }
  }

  if (status === "ok") {
    return (
      <section className="flex min-h-[70svh] items-center justify-center border-t border-border">
        <div className="fade-up max-w-xl px-6 py-32 text-center">
          <p className="eyebrow">{a.successEyebrow}</p>
          <h1 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{a.successTitle}</h1>
          <p className="mt-8 leading-relaxed text-muted-foreground">{a.successBody}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-2xl px-6 py-28 lg:py-36">
        <p className="eyebrow text-center">{a.eyebrow}</p>
        <h1 className="mt-6 text-center font-display text-3xl leading-tight sm:text-4xl">{a.title}</h1>
        <p className="mt-8 text-center leading-relaxed text-muted-foreground">{a.intro}</p>

        <form onSubmit={handleSubmit} className="mt-16 space-y-10">
          {/* Honeypot field, hidden from real visitors */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="eyebrow">{a.fields.name}</span>
              <input
                name="name"
                required
                className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="eyebrow">{a.fields.city}</span>
              <input
                name="city"
                required
                className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="eyebrow">{a.fields.email}</span>
              <input
                type="email"
                name="email"
                required
                className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="eyebrow">{a.fields.phone}</span>
              <input
                name="phone"
                className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
          </div>

          <div>
            <span className="eyebrow">{a.occasionLabel}</span>
            <div className="mt-4 flex flex-wrap gap-3">
              {a.occasions.map((o) => (
                <Choice key={o} label={o} selected={occasion === o} onClick={() => setOccasion(o)} />
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">{a.routeLabel}</span>
            <div className="mt-4 flex flex-wrap gap-3">
              {a.routes.map((r) => (
                <Choice key={r} label={r} selected={route === r} onClick={() => setRoute(r)} />
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">{a.heardLabel}</span>
            <div className="mt-4 flex flex-wrap gap-3">
              {a.heard.map((h) => (
                <Choice key={h} label={h} selected={heard === h} onClick={() => setHeard(h)} />
              ))}
            </div>
          </div>

          <label className="block">
            <span className="eyebrow">{a.fields.note}</span>
            <textarea
              name="note"
              rows={4}
              className="mt-3 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
            />
          </label>

          {status === "error" && (
            <p className="text-sm text-primary">
              {a.errorText}{" "}
              <a href="mailto:info@antichitelai.it" className="underline">
                info@antichitelai.it
              </a>
            </p>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-block border border-primary/60 px-10 py-4 text-[0.6875rem] uppercase tracking-[0.32em] text-primary transition-colors duration-700 hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              {status === "sending" ? a.sending : a.submit}
            </button>
            <p className="mt-6 text-xs text-muted-foreground">{a.disclaimer}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
