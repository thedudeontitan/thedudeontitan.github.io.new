"use client";

import React, { useEffect, useRef, useState } from "react";
import About from "./(components)/About";
import Experience from "./(components)/Experience";
import Contact from "./(components)/Contact";
import Projects from "./(components)/Projects";
import Link from "next/link";
import { Reveal } from "./framer-motion/Reveal";
import GLOBE from "vanta/src/vanta.globe";
import * as THREE from "three";

export default function Page() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x66fcf1,
          backgroundColor: 0x0b0c10,
          size: 1.0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div className="bg-[#0B0C10] text-white">
      <div
        className="bg-[#0B0C10] min-h-screen w-full flex flex-col justify-center items-start"
        ref={vantaRef}
      >
        <div className="backdrop-blur-[2px] lg:backdrop-blur-[1px] w-full px-5 lg:pl-24 xl:pl-32 flex min-h-screen">
          <div className="flex flex-col gap-y-5 my-auto">
            <Reveal side="up">
              <span className="text-lg lg:text-xl text-[#66FCF1]">
                Hello, I&apos;m
              </span>
            </Reveal>
            <Reveal side="up">
              <span className="text-5xl lg:text-7xl font-bold text-white tracking-wider">
                Ankit Kokane.
              </span>
            </Reveal>
            <Reveal side="up">
              <span className="text-4xl lg:text-6xl font-semibold text-[#d7d7d7] ">
                I build things for Web and Mobile.
              </span>
            </Reveal>
            {/* <div className=" lg:w-1/2 my-5">
              <Reveal side="up">
                <span className="text-lg lg:text-xl text-[#f3f3f3] text-opacity-70">
                  I&apos;m a Software Deveploper, I create immersive digital
                  experiences through websties and mobile apps. I also work with
                  Blockchain and Web3 Technologies. Currently Working as a{" "}
                  <span className="text-[#66FCF1]">Freelancer</span>.
                </span>
              </Reveal>
            </div> */}
            <Reveal side="up">
              <div className="hover:bg-[#66FCF1] w-fit rounded transition-all">
                <Link
                  href="https://drive.google.com/file/d/1ODUkK-FCiYc67js2sSDwUjI0kAZU71PW/view?usp=sharing"
                  target="_blank"
                >
                  <button className="bg-[#0B0C10] text-sm lg:text-base border z-10 border-[#66FCF1] text-[#66FCF1] w-fit p-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
                    Resume
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
