import Section from "../Section";
import { ArrowRight } from "lucide-react";

export default function Contact({ id }) {
  return (
    <Section id={id}>
      <div className="flex flex-col justify-between h-screen w-full max-w-5xl">
        <div className="w-full mt-40 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md text-2xl">
              Always open to new opportunities, collaborations, and
              conversations about development and technology.
            </p>
            <a
              href=""
              className="flex items-center gap-2 text-lg font-semibold hover:text-gray-400"
            >
              rinesaahmedi03@gmail.com <ArrowRight size={18} />
            </a>
            <p className="mt-4 text-gray-400">+383 43 736 361</p>
          </div>
          <div>
            <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-6">
              Elsewhere
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/rinesaahmedi"
                target="_blank"
                className="p-4 border border-gray-800 rounded-lg hover:border-gray-400 pr-10"
              >
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-400">@rinesaahmedi</p>
              </a>
              <a
                href="https://www.linkedin.com/in/rinesaahmedi"
                target="_blank"
                className="p-4 border border-gray-800 rounded-lg hover:border-gray-400 pr-10"
              >
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-400">rinesaahmedi</p>
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-12 text-start text-gray-400 text-sm py-6 border-t border-gray-700">
          <p>© 2025 . All rights reserved.</p>
          <p>Built with v0.dev by </p>
        </footer>
      </div>
    </Section>
  );
}
