import Section from "../Section";
import { works } from "../../data/projects";

export default function Projects({ id }) {
  return (
    <Section id={id}>
      <div className="w-full flex flex-col my-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Selected Work</h2>
          <h5 className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-2 sm:mt-0">
            2022–2025
          </h5>
        </div>
        <div className="space-y-8 sm:space-y-11 divide-y divide-gray-700">
          {works.map((work, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-16 pb-8 sm:pb-10"
            >
              <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-300">
                {work.year}
              </p>
              <div className="flex-1 max-w-md text-gray-700 dark:text-gray-300">
                <h4 className="text-base sm:text-xl font-medium">
                  {work.role}
                </h4>
                <p className="text-sm sm:text-base">{work.title}</p>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                  {work.description}
                </p>
              </div>
              <div className="flex flex-wrap md:min-w-xxs lg:min-w-sm sm:flex-nowrap justify-start sm:justify-end gap-2 sm:gap-4 text-xs sm:text-sm mt-2">
                {work.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
