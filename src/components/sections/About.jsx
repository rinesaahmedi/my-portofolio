"use client";

import Section from "../Section";
import { useState } from "react";

const thoughts = [
  {
    date: "2025",
    time: "4 min",
    title: "The Beauty of Algorithms",
    description:
      "I realized how much I love algorithms in university. Solving problems step by step, finding the most efficient solution, and watching numbers and logic fit together like puzzle pieces—it feels magical. Every challenge pushes me to think creatively and logically at the same time.",
  },
  {
    date: "Childhood",
    time: "3 min",
    title: "Learning with Enthusiasm",
    description:
      "As a kid, I was energetic and curious, always joining events and organizations. That drive carried over into my studies and projects—I enjoy learning with others and staying actively involved in everything I do.",
  },
  {
    date: "2025",
    time: "4 min",
    title: "Backend over Design",
    description:
      "I realized I prefer building systems and solving problems behind the scenes rather than focusing on UI design. Working with numbers, logic, and structure excites me far more than colors or fonts. It’s rewarding to see complex logic flow correctly and efficiently in a system I’ve built.",
  },
  {
    date: "2024 Internship",
    time: "3 min",
    title: "Kindness and Teamwork",
    description:
      "I believe being kind and helpful is as important as technical skills. I like supporting others, solving problems together, and making projects smoother through teamwork and communication.",
  },
];

export default function About({ id }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Section id={id}>
      <div>
        <h2 className="text-3xl font-bold mb-10">Reflections</h2>
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
              <p className="text-secondary mb-4">
                {expanded[index]
                  ? thought.description
                  : thought.description.slice(0, 120) + "..."}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                {expanded[index] ? "Show less" : "Read more"}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
