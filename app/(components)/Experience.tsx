import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Reveal } from "../framer-motion/Reveal";

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
    title: "Frontend ReactJS Developer Intern",
    company_name: "BirdVision Consultancy",
    duration: "June 2024 to Present",
    description: [
      "Working on a B2B Saas product.",
      "Working on the frontend Using ReactJS and Material UI.",
      "Collaborating with the team to create beautiful web experiences.",
      "Tools Used: ReactJS, Material UI, TailwindCSS.",
    ],
  },
  {
    key: 1,
    title: "Google Summer Of Code Mentee",
    company_name: "Google Summer Of Code - OWASP",
    duration: "June 2024 to Aug 2024",
    description: [
      "Working on a Custom Blockchain to create a Bug Bounty Reward System.",
      "Also working on the website with backend as Django.",
      "Collaborating in the Open Source Project with other contributors and maintainers.",
      "Tools Used: Go, Python, Django, Solidity.",
    ],
  },
  {
    key: 1,
    title: "SDE Intern",
    company_name: "DOI Soft Tech Pvt Ltd.",
    duration: "Oct 2023 to Dec 2023",
    description: [
      "I worked on their social media app and website.",
      "Collaborated with the team to create beautiful web experiences.",
      "Worked on Website's Frontend Backend with MERN stack and their Mobile App.",
      "Tools Used: ReactJS, NodeJS, Express, MongoDB, React Native",
    ],
  },
  {
    key: 1,
    title: "Linux Kernel Developer",
    company_name: "LFX Mentorship '23 at Linux",
    duration: "Sept 2023 to Oct 2023",
    description: [
      "LFX mentorship is a prestigious 3 month open-source program offered by The Linux Foundation.",
      "Contributing to the Linux Kernel which is used by millions of people and companies.",
      "Solving Bugs and Issues in the Linux Kernel.",
      "Tools Used: C, C++, Linux kernel, Git",
    ],
  },
  {
    key: 1,
    title: "Fullstack Web Developer",
    company_name: "7 Darter Info Service",
    duration: "Oct 2022 to Feb 2023",
    description: [
      "Designed and Developed OSINT Website for this start up.",
      "Collaborated with other developers to create an OSINT eco-system.",
      "Developed a management admin panel(website) for their IOT device.",
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
  {
    key: 3,
    title: "Google DSC Lead",
    company_name: "Google DSC",
    duration: "Aug 2023 to Present",
    description: [
      "Leading a group of passionate developers to build projects and to organize various sessions.",
      "Building a large tech community of developers and students to share knowledge and experience.",
      "Teaching students about various technologies and sharing my experience throughout my developer journey.",
      "Talking about OpenSource, Cloud, Blockchain and Web Developement.",
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <div className="min-h-screen mx-5 lg:mx-0 flex ">
        <div className="flex flex-col w-full items-center mt-28">
          <Reveal side="up">
            <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] mb-10 lg:mb-20">
              Experience
            </span>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-start ">
            {jobs.map((info) => (
              <ProjectCard
                company_name={info.company_name}
                description={info.description}
                duration={info.duration}
                key={info.key}
                title={info.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard: React.FC<job> = ({
  key,
  title,
  company_name,
  description,
  duration,
}) => {
  return (
    <Reveal side="up">
      <div className="hover:bg-[#66FCF1] rounded-md transition-all mt-10 flex">
        <div className="bg-[#0B0C10] min-h-[50vh] justify-center shadow-md w-[80vw] lg:w-[25vw] flex flex-col gap-2 p-5 rounded-md shadow-[#232427] transition-all hover:-translate-x-2 hover:-translate-y-2">
          <div className="flex flex-col font-mono font-medium">
            <span className="text-lg">{title}</span>
            <span className="text-lg text-[#66FCF1]">
              &nbsp;@{company_name}
            </span>
          </div>
          <span className="opacity-80 font-mono mb-5">{duration}</span>
          <ul className="list-none flex flex-col gap-y-2 opacity-80 text-[#f3f3f3]">
            {description.map((descrip) => (
              <li key={descrip} className="pl-2">
                <VscDebugBreakpointLogUnverified className="inline-block mr-2 text-[#66FCF1]" />
                {descrip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};
