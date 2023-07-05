"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
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
        className={`flex flex-row top-0 right-0 left-0 bg-white fixed w-full transition-all duration-500 ${
          isScrolled
            ? "transform -translate-y-0"
            : "transform -translate-y-full"
        } bg-white`}
      >
        <div>
            <span className="text-5xl"></span>
        </div>
        <div className="flex flex-row my-5 ml-auto gap-x-5 mr-10 items-center">
          <Link
            href="#about"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">About</div>
          </Link>
          <Link
            href="#experience"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Experience</div>
          </Link>
          <Link
            href="#Projects"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Projects</div>
          </Link>
          {/* <Link
            href="/blogs"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Blogs</div>
          </Link> */}
          <Link
            href="#contact"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Contact</div>
          </Link>
        <button className="border border-black text-base font-medium px-2 py-1">
          Resume
        </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
