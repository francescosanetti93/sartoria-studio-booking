/**
 * This standalone build has no network access to lovable.app, so the real photos
 * already generated for this project (hero-loom.jpg, craft-hands.jpg, experience-rome.jpg,
 * atelier-rome.jpg, traveling-master.jpg) could not be fetched. Every photo slot is an
 * honest labeled placeholder — swap real files into /src/assets and replace the
 * <Placeholder label="..."/> usage with an <img> once you have them.
 */
export function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`herringbone-placeholder relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-end p-4">
        <span className="eyebrow" style={{ opacity: 0.8 }}>
          Missing photo · {label}
        </span>
      </div>
    </div>
  );
}
