"use client";

import Section from "../Section";
import { useState } from "react";
import { thoughts } from "../../data/thoughts";

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
