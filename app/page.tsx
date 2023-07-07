import React from "react";
import About from "./(components)/About";
import Experience from "./(components)/Experience";
import Contact from "./(components)/Contact";
import Projects from "./(components)/Projects";

export default function page() {
  return (
    <div className="bg-[#0B0C10] text-white">
      <div className="min-h-screen">
        <div className="lg:ml-80 flex h-screen">
          <div className="flex flex-col gap-y-5 my-auto">
            <span className="text-xl text-[#66FCF1]">Hello, I&apos;m</span>
            <span className="text-7xl font-semibold text-[#f3f3f3]">
              Ankit Kokane.
            </span>
            <span className="text-6xl font-semibold text-[#f3f3f3] opacity-70">
              I build things for Web and Mobile.
            </span>
            <span className="text-xl lg:w-1/2 my-5 text-[#f3f3f3] opacity-70">
              I&apos;m a Software Deveploper, I create immersive digital
              experiences through websties and mobile apps. I also work with
              Blockchain and Web3 Technologies. Currently Working as a{" "}
              <span className="text-[#66FCF1]">Freelancer</span> .
            </span>
            <button className="border border-[#66FCF1] text-[#66FCF1] w-fit p-5 rounded hover:scale-105 hover:shadow-md hover:shadow-[#66FCF1] transition-all">
              Checkout My Work
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen" id="about">
        <About />
      </div>
      <div className="min-h-screen" id="experience">
        <Experience />
      </div>
      <div className="min-h-screen" id="projects">
        <Projects />
      </div>
      <div className="min-h-screen" id="contact">
        <Contact />
      </div>
    </div>
  );
}
