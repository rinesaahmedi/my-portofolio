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
      <div className="max-w-full flex flex-col">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-3xl font-bold">Selected Work</h2>
          <h5 className="text-gray-400">2022-2025</h5>
        </div>
        <div className="space-y-11 divide-y divide-gray-400">
          {works.map((work, index) => (
            <div key={index} className="flex justify-between gap-16 pb-10">
              <p className="text-2xl">{work.year}</p>
              <div className="max-w-md">
                <h4 className="text-xl">{work.role}</h4>
                <p className="text-gray-300">{work.title}</p>
                <p className="text-gray-300 mt-3">{work.description}</p>
              </div>
              <div className="flex justify-end min-w-xs gap-4 text-gray-500">
                {work.tech.map((tech, i) => (
                  <span key={i} className="">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
