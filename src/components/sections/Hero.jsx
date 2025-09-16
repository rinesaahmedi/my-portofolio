import Section from "../Section";

export default function Hero({ id }) {
  return (
    <Section id={id}>
      <div className="flex flex-col px-8">
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
          Portfolio / 2025
        </p>

        <h1 className="text-5xl font-bold mb-4">Rinesa Ahmedi</h1>
        <h2 className="text-xl text-gray-300 mb-8">
          Backend Developer building reliable systems with Node.js, SQL
        </h2>

        <div className="flex gap-20 text-gray-300">
          <div className="flex flex-col gap-9">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                Available
              </h3>
              <p>For Work</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                Currently
              </h3>
              <p>
                Computer Science & Engineering Graduate
                <br />
                UBT University (2025)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                Location
              </h3>
              <p>Kosovo</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                Focus
              </h3>
              <ul className="space-y-1">
                <li>Backend Development</li>
                <li>Databases (MySQL, SQL)</li>
                <li>Node.js & Express</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
