import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { Reveal } from "../framer-motion/Reveal";

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
    image_path: "/assets/project3.png",
    type: "Website",
    title: "Kai Ramen",
    description:
      "A restaurant business website which focuses on Japanese cuisine.",
    tools: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
    github_link: "https://github.com/thedudeontitan/kai-ramen",
    link: "https://kai-ramen.vercel.app/",
  },
  {
    key: 2,
    image_path: "/assets/project6.png",
    type: "Private Blockchain and Website",
    title: "Hyper Updates",
    description:
      "Website and Private Blockchain built at ChainLink Hackathon. To provide Decentralized and secure firmware updates.",
    tools: ["TypeScript", "NextJS", "TailwindCSS"],
    github_link: "https://github.com/Hyper-Updates/hyper_updates_frontend",
    link: "https://hyper-updates.vercel.app/",
  },
  {
    key: 3,
    image_path: "/assets/project1.png",
    type: "Web App",
    title: "Creative Dugout",
    description:
      "A Website I've built for Creative Dugout which will help their business reach more clients and grow their business.",
    tools: ["TypeScript", "NextJS", "TailwindCSS"],
    github_link: "https://github.com/thedudeontitan/",
    link: "https://creative-dogout-website.vercel.app/",
  },
  {
    key: 4,
    image_path: "/assets/project2.png",
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
      <div className="lg:flex hidden justify-center items-center">
        <div className="flex flex-col ">
          <div className="mt-28 flex flex-row items-center gap-x-10">
            <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] ">
              Things I&apos;ve Built
            </span>
            <div className="border-t w-80 lg:flex overflow-hidden border-[#353D47]" />
          </div>
          {projects.map((data) => (
            <div key={data.key}>
              <Reveal side={`${data.key % 2 === 0 ? "right" : "left"}`}>
                <div className="relative mt-14 flex flex-col justify-center items-center w-full mb-5">
                  <Image
                    src={data.image_path}
                    alt="project"
                    width={600}
                    height={600}
                    className={`w-[600px] ${data.key % 2 === 0 ? "ml-60" : ""}`}
                  ></Image>
                  <div
                    className={`absolute z-10 flex flex-col text-right ${
                      data.key % 2 === 0 ? "mr-[45vw]" : "ml-[55vw]"
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
                      className={` mt-8 text-left rounded p-8 bg-[#15171f] w-[30vw] shadow-md shadow-[#15171f] hover:shadow-lg hover:shadow-[#15171f] transition-all ${
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
                        <Link href={data.github_link} target="_blank">
                          <FiGithub className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                        </Link>
                        <Link href={data.link} target="_blank">
                          <FiExternalLink className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:hidden mx-5">
        <div className="mt-28 flex w-full items-center flex-col">
          <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] mb-10">
            Things I&apos;ve Built
          </span>
          <div className="flex flex-col gap-10">
            {projects.map((info) => (
              <div key={info.key} className="">
                <Reveal side={`${info.key % 2 === 0 ? "right" : "left"}`}>
                  <div className="shadow-md shadow-[#232427] flex flex-col p-5 gap-y-5">
                    <span className="font-mono text-[#66FCF1] text-sm">
                      {info.type}
                    </span>
                    <span className="text-xl font-semibold opacity-80">
                      {info.title}
                    </span>
                    <span className="text-[#f3f3f3] opacity-80">
                      {info.description}
                    </span>
                    <div className="mt-5 text-sm text-left flex flex-row flex-wrap font-mono gap-2">
                      {info.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <div className="flex flex-row text-2xl mt-4 mb-5 gap-x-5">
                      <Link href={info.github_link} target="_blank">
                        <FiGithub className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                      </Link>
                      <Link href={info.link} target="_blank">
                        <FiExternalLink className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hover:bg-[#66FCF1] w-fit rounded transition-all mx-auto mt-10">
        <Reveal side="up">
          <Link href="https:github.com/thedudeontitan" target="_blank">
            <button className="bg-[#0B0C10] border z-10 border-[#66FCF1] text-[#66FCF1] w-fit p-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
              Check Out My Other Work
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
