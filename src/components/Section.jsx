export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="h-screen min-h-fit flex items-center justify-center scroll-mt-16 max-w-5xl w-full mx-auto"
    >
      {children}
    </section>
  );
}
