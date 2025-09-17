import Section from "../Section";

const focusAreas = [
  "Backend Development",
  "MySQL & SQL",
  "Node.js & Express",
  "Next.js",
];

export default function Hero({ id }) {
  return (
    <Section id={id}>
      <div className="flex flex-col w-full gap-12">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
            Portfolio / 2025
          </p>
          <h1 className="text-5xl font-bold mb-4">Rinesa Ahmedi</h1>
          <h2 className="text-xl text-gray-300 mb-8">
            Backend Developer building reliable systems with Node.js, SQL
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-28 text-gray-300">
          <div className="flex flex-col gap-9">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-1">
                Available
              </h3>
              <p>Available Around the Clock</p>
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
              <h3 className="text-sm uppercase font-semibold text-gray-400 mb-3">
                Focus
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-sm">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="border border-gray-500 rounded-lg px-3 py-2 transition-all hover:border-white text-gray-300 w-fit"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
