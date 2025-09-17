import Section from "../Section";

export default function Projects({ id }) {
  const works = [
    {
      year: "2025",
      title: "Human Resource Management System",
      role: "UBT Lab Course",
      description:
        "Built an HR management platform with Next.js frontend and Node.js backend, including database design and CRUD operations.",
      tech: ["Next.js", "Node.js", "MySQL"],
    },
    {
      year: "2024",
      title: "Cohax Internship",
      role: "Frontend Developer",
      description:
        "Worked on the company’s official website using Next.js, improving UI and integrating backend APIs.",
      tech: ["Next.js", "Tailwind CSS", "API Integration"],
    },
    {
      year: "2023",
      title: "Library Management System",
      role: "Database Project",
      description:
        "Designed UML diagrams, created relational tables, and wrote SQL queries to manage book inventory and lending system.",
      tech: ["SQL", "Database Design", "UML"],
    },
    {
      year: "2022",
      title: "Rent-a-Car Web App",
      role: "Web Design Course",
      description:
        "First personal project with HTML, CSS, JavaScript, PHP, and MySQL",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];
  return (
    <Section id={id}>
      <div className="w-full flex flex-col my-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Selected Work</h2>
          <h5 className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            2022–2025
          </h5>
        </div>
        <div className="space-y-8 sm:space-y-11 divide-y divide-gray-700">
          {works.map((work, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-16 pb-8 sm:pb-10"
            >
              <p className="text-lg sm:text-2xl font-semibold text-gray-400">
                {work.year}
              </p>
              <div className="flex-1 max-w-md">
                <h4 className="text-base sm:text-xl font-medium">
                  {work.role}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {work.title}
                </p>
                <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                  {work.description}
                </p>
              </div>
              <div className="flex flex-wrap md:min-w-xxs lg:min-w-sm sm:flex-nowrap justify-start sm:justify-end gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-2">
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
