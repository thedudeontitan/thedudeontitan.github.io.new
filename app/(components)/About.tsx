"use client";
import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Reveal } from "../framer-motion/Reveal";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section>
      <div className="lg:mx-28 xl:mx-96 min-h-screen flex flex-col items-center lg:items-start">
        <Reveal side="up">
          <div className="mt-10 lg:mt-20 flex flex-row lg:gap-x-10 items-center justify-center lg:justify-normal mb-10 lg:mb-14">
            <span className="text-4xl font-semibold text-[#f3f3f3] opacity-90">
              About Me
            </span>
            <div className="border-t hidden lg:flex w-80 border-[#353D47]" />
          </div>
        </Reveal>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:w-full lg:gap-x-20">
          <div className="my-auto mx-5 lg:mx-0 lg:w-2/3 mt-10 lg:mt-0">
            <div className="flex flex-col gap-y-4 text-lg opacity-70">
              <Reveal side="left">
                <span>
                  Hello, I am Ankit Kokane and I enjoy creating software. I have
                  been creating websites for over 4 years.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>
                  I am currently in last year of my Computer Engineering in
                  Pune, India. I work as a Frontend Developer and also a
                  Freelance Web, Mobile and Python Automantion Developer. I have
                  also worked as a SDE Intern and Fullstack Web Developer.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>
                  I am a serial hacker and have won over 15 Internation
                  hackathons, Recently I have won ETHGlobal Bangkok '24,
                  ETHGlobal London '24, ETH India '24 and Unfold '24.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>
                  Currently I am actively contributing to various open source
                  projects.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </span>
              </Reveal>
            </div>
            <Reveal side="left">
              <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-base mt-5">
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Solidity | Move
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  TypeScript | JavaScript
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  NextJS | ReactJS
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Python
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Django
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Flutter
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  React Native
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Postgres | MongoDB | SQLite
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal side="right">
            <div
              className={`ml-5 mt-5 border-2 border-[#66FCF1] rounded h-fit w-fit lg:my-auto transition-all ${
                isHovered ? "translate-x-1 translate-y-1" : ""
              }`}
            >
              <Image
                src="/assets/pfp.png"
                alt="image"
                width={300}
                height={300}
                className={`-translate-x-4 -translate-y-4 rounded transition-all ${
                  isHovered ? "hover:-translate-x-6 hover:-translate-y-6" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
