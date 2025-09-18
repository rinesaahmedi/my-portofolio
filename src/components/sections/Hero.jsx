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
      <div className="flex flex-col w-full gap-8 ">
        <div>
          <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-300 mb-2">
            Portfolio / 2025
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">Rinesa Ahmedi</h1>
          <h2 className="text-base sm:text-xl text-gray-300 mb-6 leading-relaxed">
            Backend Developer delivering reliable and scalable systems
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-300 mb-1">
                Available
              </h3>
              <p className="text-sm">Available Around the Clock</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-300 mb-1">
                Currently
              </h3>
              <p className="text-sm leading-snug">
                Computer Science & Engineering Graduate
                <br />
                UBT University (2025)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-300 mb-1">
                Location
              </h3>
              <p className="text-sm">Kosovo</p>
            </div>

            <div>
              <h3 className="text-xs uppercase font-semibold text-gray-300 mb-2">
                Focus
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="border border-gray-300 rounded-md px-2 py-1.5 transition hover:border-white text-gray-300 w-fit"
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
