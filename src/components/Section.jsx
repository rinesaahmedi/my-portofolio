export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center scroll-mt-16 max-w-5xl w-full mx-auto px-4 sm:px-6 md:px-16 py-8 md:py-12"
    >
      {children}
    </section>
  );
}
