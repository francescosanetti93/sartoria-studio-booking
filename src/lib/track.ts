export function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // @ts-expect-error dataLayer is attached at runtime via index.html
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error dataLayer is attached at runtime via index.html
  window.dataLayer.push({ event, ...payload });
}
