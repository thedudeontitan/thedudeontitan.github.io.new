"use client";
import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

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
      <div className="mx-96 h-screen flex ">
        <div className="flex flex-row justify-between w-full lg:gap-x-20">
          <div className="my-auto w-2/3">
            <div className="flex flex-row lg:gap-x-10 items-center mb-14">
              <span className="text-4xl font-semibold text-[#f3f3f3] opacity-80">
                About Me
              </span>
              <div className="border-t flex-grow border-[#353D47]" />
            </div>
            <div className="flex flex-col gap-y-4 text-lg opacity-70">
              <span className="">
                Hello, I am Ankit Kokane and I enjoy creating software. I have
                been creating websites for over 4 years.
              </span>
              <span>
                I am currently in second year of my Computer Engineering in
                Pune, India. I work as a Freelance Web, Mobile and Python
                Automantion Developer. I have also worked as a Fullstack Web
                Developer.
              </span>
              <span>
                I have also won over five Internation hackathons, The most
                prominent one being Massachusetts Institute Of Technology
                Bitcoin Hackathon where I secured the First Prize.
              </span>
              <span>
                Currently I am actively contributing to various open source
                projects.
              </span>
              <span>
                Here are a few technologies I&apos;ve been working with recently:
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-base mt-5">
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
                Postgres | MySQL | SQLite
              </span>
              <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                <VscDebugBreakpointLogUnverified />
                Ethereum | Solidity
              </span>
            </div>
          </div>
          <div
            className={`border-2 border-[#66FCF1] rounded h-fit w-fit my-auto transition-all ${
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
        </div>
      </div>
    </section>
  );
}
