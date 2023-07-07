import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

interface job {
  key: number;
  title: string;
  company_name: string;
  duration: string;
  description: string[];
}

const jobs: job[] = [
  {
    key: 1,
    title: "Fullstack Web Developer",
    company_name: "7 Darter Info Service",
    duration: "Oct 2022 to Feb 2023",
    description: [
      "Designed and Developed OSINT Website for this start up.",
      "Collaborated with other developers to create an OSINT eco-system.",
      "Built and Deployed the software according to the needs of the stakeholders.",
      "Tools Used: JavaScript, Python, ReactJS, Django, TailwindCSS, SQLite.",
    ],
  },
  {
    key: 2,
    title: "Freelancer",
    company_name: "Web @Mobile @Automation",
    duration: "Mar 2022 to Present",
    description: [
      "Creating exceptional digital experiences in the form of Websites and Mobile Application for devrse set of clients.",
      "Building tools to help companies automate their workflows and accumulate data with Python Automation and Web Scraping.",
      "Tools for Web: JavaScript, TypeScript, Python. NextJS, ReactJS, TailwindCSS, Django",
      "Tools for Mobile: React Native, Flutter",
      "Tools for Automation: Python, Selium, BeautifulSoup",
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <div className="h-screen flex">
        <div className="flex flex-col my-auto w-full items-center mx-96">
          <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] lg:mb-20">
            Experience
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
            {jobs.map((info) => (
              <div
                key={info.key}
                className="shadow-md flex flex-col gap-2 p-5 rounded-md shadow-[#232427] transition-all hover:scale-[1.02]"
              >
                <div className="inline-block font-mono font-medium">
                  <span className="text-lg">{info.title}</span>
                  <span className="text-lg text-[#66FCF1]">
                    &nbsp;@{info.company_name}
                  </span>
                </div>
                <span className="opacity-80 font-mono mb-5">
                  {info.duration}
                </span>
                <ul className="list-none flex flex-col gap-y-2 opacity-80 ">
                  {info.description.map((descrip) => (
                    <li key={descrip} className="pl-2">
                      <VscDebugBreakpointLogUnverified className="inline-block mr-2 text-[#66FCF1]" />
                      {descrip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
