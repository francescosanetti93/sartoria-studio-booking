import { useI18n } from "../i18n/I18nContext";

/** Shown only on zh/ru/ar — these are AI-drafted translations pending native review. */
export function DraftBanner() {
  const { isDraft, t } = useI18n();
  if (!isDraft) return null;
  return (
    <div className="fixed bottom-4 z-50" style={{ insetInlineStart: 16 }}>
      <span className="draft-flag">⚠ {t.draftBanner}</span>
    </div>
  );
}
