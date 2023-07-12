"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
  return (
    <div>
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
      <nav className="flex lg:hidden fixed top-0 right-0">
        <div className="text-[#f3f3f3]">
          <button className="m-5">
            <FiMenu className="p-1 text-5xl"/>
          </button>
          <div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
