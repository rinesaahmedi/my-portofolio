import Section from "../Section";
import Footer from "../Footer";
import { ArrowRight } from "lucide-react";

export default function Contact({ id }) {
  return (
    <Section id={id}>
      <div className="flex flex-col justify-between min-h-screen w-full max-w-5xl">
        <div className="w-full mt-20 sm:mt-40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10 sm:gap-0">
          <div className="w-full sm:w-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-md text-lg sm:text-2xl leading-relaxed">
              Always open to new opportunities, collaborations, and
              conversations about development and technology.
            </p>
            <a
              href="mailto:rinesaahmedi03@gmail.com"
              className="flex items-center gap-2 text-base sm:text-lg font-semibold hover:text-gray-800 dark:hover:text-gray-300"
            >
              rinesaahmedi03@gmail.com <ArrowRight size={18} />
            </a>
            <p className="mt-3 sm:mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              +383 43 736 361
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <h3 className="uppercase text-xs sm:text-sm tracking-widest text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
              Elsewhere
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-700 dark:text-gray-300">
              <a
                href="https://github.com/rinesaahmedi"
                target="_blank"
                className="p-4 border border-gray-300 hover:border-gray-700 dark:border-gray-700 rounded-lg dark:hover:border-gray-300"
              >
                <p className="font-semibold">GitHub</p>
                <p>@rinesaahmedi</p>
              </a>
              <a
                href="https://www.linkedin.com/in/rinesaahmedi"
                target="_blank"
                className="p-4 border border-gray-300 hover:border-gray-700 dark:border-gray-700 rounded-lg dark:hover:border-gray-300"
              >
                <p className="font-semibold">LinkedIn</p>
                <p>rinesaahmedi</p>
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Section>
  );
}
