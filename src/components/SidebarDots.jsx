"use client";
import { useEffect, useState } from "react";

const sections = ["hero", "projects", "about", "contact"];

export default function SidebarDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-2 h-8 rounded-full transition-colors ${
            active === id ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
}
