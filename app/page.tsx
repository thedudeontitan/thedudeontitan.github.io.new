import React from "react";
import About from "./(components)/About";
import Experience from "./(components)/Experience";
import Contact from "./(components)/Contact";
import Projects from "./(components)/Projects";
import Link from "next/link";
import { Reveal } from "./framer-motion/Reveal";

export default function page() {
  return (
    <div className="bg-[#0B0C10] text-white">
      <div className="min-h-screen">
        <div className="mx-5 lg:ml-80 flex min-h-screen">
          <div className="flex flex-col gap-y-5 my-auto">
            <Reveal side="up">
              <span className="text-lg lg:text-xl text-[#66FCF1]">
                Hello, I&apos;m
              </span>
            </Reveal>
            <Reveal side="up">
              <span className="text-5xl lg:text-7xl font-semibold text-[#f3f3f3] ">
                Ankit Kokane.
              </span>
            </Reveal>
            <Reveal side="up">
              <span className="text-4xl lg:text-6xl font-semibold text-[#f3f3f3] text-opacity-70">
                I build things for Web and Mobile.
              </span>
            </Reveal>
            <div className=" lg:w-1/2 my-5">
              <Reveal side="up">
                <span className="text-lg lg:text-xl text-[#f3f3f3] text-opacity-70">
                  I&apos;m a Software Deveploper, I create immersive digital
                  experiences through websties and mobile apps. I also work with
                  Blockchain and Web3 Technologies. Currently Working as a{" "}
                  <span className="text-[#66FCF1]">Freelancer</span>.
                </span>
              </Reveal>
            </div>
            <Reveal side="up">
              <div className="hover:bg-[#66FCF1] w-fit rounded transition-all">
                <Link href="#projects">
                  <button className="bg-[#0B0C10] text-sm lg:text-base border z-10 border-[#66FCF1] text-[#66FCF1] w-fit p-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
                    Checkout My Work
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="" id="about">
        <About />
      </div>
      <div className="" id="experience">
        <Experience />
      </div>
      <div className="" id="projects">
        <Projects />
      </div>
      <div className="" id="contact">
        <Contact />
      </div>
    </div>
  );
}
