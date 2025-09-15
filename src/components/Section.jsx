export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="h-screen flex items-center justify-center scroll-mt-16"
    >
      {children}
    </section>
  );
}
