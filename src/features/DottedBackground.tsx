export function DottedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="dotted-field absolute inset-0" />
      <div className="dotted-field-soft absolute inset-0" />
    </div>
  );
}
