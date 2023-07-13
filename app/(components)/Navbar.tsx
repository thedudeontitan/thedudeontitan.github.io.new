"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledUp = prevScrollPos > currentScrollPos;

      setIsScrolled(isScrolledUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {});

  return (
    <div className="w-screen flex">
      <nav
        className={`lg:flex hidden flex-row top-0 right-0 left-0 fixed w-full transition-all duration-500 ${
          isScrolled
            ? "transform -translate-y-0"
            : "transform -translate-y-full"
        } bg-[#0B0C10] pt-3 z-20`}
      >
        <div>
          <span className="text-5xl"></span>
        </div>
        <div className="flex flex-row my-5 ml-auto gap-x-10 mr-10 items-center text-sm font-mono">
          <Link
            href="#about"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-[#f3f3f3]">About</div>
          </Link>
          <Link
            href="#experience"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-[#f3f3f3]">Experience</div>
          </Link>
          <Link
            href="#projects"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-[#f3f3f3]">Projects</div>
          </Link>
          <Link
            href="#contact"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-[#f3f3f3]">Contact</div>
          </Link>

          <div className="hover:bg-[#66FCF1] w-fit rounded transition-all">
            <Link href="/Resume.pdf" target="_blank">
              <button className="bg-[#0B0C10] border z-10 border-[#66FCF1] text-[#66FCF1] w-fit py-2 px-4 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="flex lg:hidden top-0 right-0 w-full">
        <div className={`text-[#f3f3f3] flex w-full justify-end `}>
          <button
            className="fixed m-5 z-40"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <FiX className="p-1 text-5xl" />
            ) : (
              <FiMenu className="p-1 text-5xl" />
            )}
          </button>
          <div className={`w-screen flex justify-end`}>
            <div
              className={`text-[#f3f3f3] fixed z-30 h-screen w-3/4 bg-[#232427] transition-all duration-500 ${
                navOpen ? " backdrop-blur" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col text-lg gap-y-5 mt-28 font-mono mx-5">
                <Link href="#about" className="p-5" onClick={()=>setNavOpen(false)}>About</Link>
                <Link href="#experience" className="p-5" onClick={()=>setNavOpen(false)}>Experience</Link>
                <Link href="#projects" className="p-5" onClick={()=>setNavOpen(false)}>Projects</Link>
                <Link href="#contact" className="p-5" onClick={()=>setNavOpen(false)}>Contact</Link>
                <div className="hover:bg-[#66FCF1] w-fit rounded transition-all mx-5">
                  <Link href="/Resume.pdf" target="_blank">
                    <button className="bg-[#232427] border z-10 border-[#66FCF1] text-[#66FCF1] w-fit py-2 px-4 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
                      Resume
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
