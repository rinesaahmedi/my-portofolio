import Section from "../Section";

export default function About({ id }) {
  return (
    <Section id={id}>
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>
    </Section>
  );
}
