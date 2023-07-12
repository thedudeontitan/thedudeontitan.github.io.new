import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="min-h-screen flex mx-5 lg:mx-0">
      <div className="mt-20 flex justify-center w-full">
        <div className="flex flex-col gap-10 lg:gap-0 items-center justify-center">
          <span className="text-[#66FCF1] text-2xl lg:text-3xl font-semibold opacity-80 lg:mb-8">
            Liked My Work?
          </span>
          <span className="text-5xl font-semibold opacity-90 text-[#f3f3f3] lg:mb-10 text-center">
            Reach Out to Me!
          </span>
          <span className="lg:text-xl text-lg lg:w-[80vh] text-center font-medium opacity-75">
            I am always looking for new opportunities to work with professionals
            and companies. I would also like to contirbute to opensource
            porjects providing real world value.
          </span>
          <div className="hover:bg-[#66FCF1] w-fit rounded transition-all my-10">
            <Link href="mailto:ankitkokane77@gmail.com">
              <button className="bg-[#0B0C10] border z-10 border-[#66FCF1] text-[#66FCF1] w-fit p-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
