import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { info } from "console";

interface project {
  key: number;
  image_path: string;
  type: string;
  title: string;
  description: string;
  tools: string[];
  github_link: string;
  link: string;
}

const projects: project[] = [
  {
    key: 1,
    image_path: "/project2.png",
    type: "Web App",
    title: "Creative Dugout",
    description:
      "A Website I created for Creative Dugout which will be ",
    tools: ["TypeScript", "ReactJS", "Solidity", "Polygon", "TailwindCSS"],
    github_link: "https://github.com/thedudeontitan/safe-gaurd",
    link: "https://github.com/thedudeontitan/safe-gaurd",
  },
  {
    key: 2,
    image_path: "/project2.png",
    type: "Web App",
    title: "Safe Gaurd",
    description:
      " A web3 application built to allow companies to help manage their crypto assets. Create multisig wallets, safe vaults and transaction groups.",
    tools: ["TypeScript", "ReactJS", "Solidity", "Polygon", "TailwindCSS"],
    github_link: "https://github.com/thedudeontitan/safe-gaurd",
    link: "https://github.com/thedudeontitan/safe-gaurd",
  },
  {
    key: 3,
    image_path: "/project2.png",
    type: "Web App",
    title: "Safe Gaurd",
    description:
      " A web3 application built to allow companies to help manage their crypto assets. Create multisig wallets, safe vaults and transaction groups.",
    tools: ["TypeScript", "ReactJS", "Solidity", "Polygon", "TailwindCSS"],
    github_link: "https://github.com/thedudeontitan/safe-gaurd",
    link: "https://github.com/thedudeontitan/safe-gaurd",
  },
  {
    key: 4,
    image_path: "/project2.png",
    type: "Web App",
    title: "Safe Gaurd",
    description:
      " A web3 application built to allow companies to help manage their crypto assets. Create multisig wallets, safe vaults and transaction groups.",
    tools: ["TypeScript", "ReactJS", "Solidity", "Polygon", "TailwindCSS"],
    github_link: "https://github.com/thedudeontitan/safe-gaurd",
    link: "https://github.com/thedudeontitan/safe-gaurd",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen">
      <div className="flex w-full">
        <div className="flex flex-col mx-2 lg:mx-24 xl:mx-96 w-full">
          <div className="mt-28 flex flex-row items-center gap-x-10">
            <span className="text-3xl font-semibold opacity-90 text-[#f3f3f3] ">
              Things I&apos;ve Built
            </span>
            <div className="border-t w-80 lg:flex overflow-hidden border-[#353D47]" />
          </div>
          {projects.map((data) => (
            <div className="mt-14 flex flex-col w-full" key={data.key}>
              <div className={` flex w-full ${data.key % 2 === 0 ? "justify-end ml-24" : ""}`}>
                <Image
                  src="/assets/project2.png"
                  alt="project"
                  width={600}
                  height={600}
                  className={` ${data.key % 2 === 0 ? "" : ""}`}
                ></Image>
              </div>
              <div
                className={`absolute z-10 flex flex-col text-right ${
                  data.key % 2 === 0 ? "" : "ml-[65vh]"
                }`}
              >
                <div className={`flex flex-col `}>
                  <span
                    className={`font-mono text-[#66FCF1] text-sm ${
                      data.key % 2 === 0 ? "text-left" : ""
                    }`}
                  >
                    {data.type}
                  </span>
                  <span
                    className={`text-[#f3f3f3] font-semibold text-2xl mt-2 ${
                      data.key % 2 === 0 ? "text-left" : ""
                    }`}
                  >
                    {data.title}
                  </span>
                </div>
                <div
                  className={` mt-8 text-left rounded p-8 bg-[#15171f] w-[52vh] shadow-md shadow-[#15171f] hover:shadow-lg hover:shadow-[#15171f] transition-all ${
                    data.key % 2 === 0 ? "" : "ml-10"
                  }`}
                >
                  <span className="text-[#f3f3f3] opacity-80">
                    {data.description}
                  </span>
                </div>
                <div
                  className={`flex flex-col ${
                    data.key % 2 === 0 ? "items-start" : ""
                  }`}
                >
                  <div className="mt-5 text-sm flex flex-row justify-end font-mono gap-x-2">
                    {data.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <div className="flex flex-row justify-end text-2xl mt-4 gap-x-5">
                    <Link
                      href="https://github.com/thedudeontitan/safe-gaurd"
                      target="_blank"
                    >
                      <FiGithub className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                    </Link>
                    <Link
                      href="https://github.com/thedudeontitan/safe-gaurd"
                      target="_blank"
                    >
                      <FiExternalLink className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
