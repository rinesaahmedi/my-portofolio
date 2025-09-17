import Section from "../Section";

const thoughts = [
  {
    date: "Dec 2025",
    time: "5 min",
    title: "Building ShareEstate",
    description:
      "Exploring how I designed and implemented a booking platform with Node.js, React, and MySQL.",
    link: "#",
  },
  {
    date: "Nov 2025",
    time: "4 min",
    title: "MySQL Tips for Beginners",
    description:
      "Sharing simple tricks I used to optimize queries while working on HRM and other student projects.",
    link: "#",
  },
  {
    date: "Oct 2025",
    time: "6 min",
    title: "Learning Cloud with AWS",
    description:
      "How I built an image upload app using EC2 and S3, and what I learned about deployment.",
    link: "#",
  },
  {
    date: "Sep 2025",
    time: "3 min",
    title: "Why I Prefer Backend Development",
    description:
      "Thoughts on why I enjoy building backend systems and solving logic challenges more than UI work.",
    link: "#",
  },
];

export default function About({ id }) {
  return (
    <Section id={id}>
      <div>
        <h2 className="text-3xl font-bold mb-10">Recent Thoughts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {thoughts.map((thought, index) => (
            <div
              key={index}
              className="group border-2 border-gray-600 dark:border-gray-300 rounded-xl p-6 hover:border-black dark:hover:border-white transition"
            >
              <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-3">
                <span>{thought.date}</span>
                <span>{thought.time}</span>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300  transition-colors">
                {thought.title}
              </h3>
              <p className="text-secondary mb-4">{thought.description}</p>
              <a
                href={thought.link}
                className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read more
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
