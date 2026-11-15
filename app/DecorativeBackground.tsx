export default function DecorativeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 92% 0%, rgba(16, 185, 129, 0.08), transparent 34%), radial-gradient(ellipse at 0% 78%, rgba(16, 185, 129, 0.045), transparent 28%)",
      }}
    />
  );
}
