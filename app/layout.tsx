import Navbar from "./(components)/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Kokane",
  description: "Ankit Kokane's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading>
        <Navbar />
        <main className="overflow-hidden">
        {children}
          <div className="hidden lg:fixed lg:flex flex-row left-0 bottom-0 lg:ml-14 text-white z-20">
            <div className="text-2xl flex flex-col items-center gap-y-5">
              <Link href="https://github.com/thedudeontitan">
                <FiGithub className="hover:scale-125 transition-all duration-500 hover:text-[#66FCF1]" />
              </Link>
              <Link href="https://github.com/thedudeontitan">
                <FiLinkedin className="hover:scale-125 transition-all duration-500 hover:text-[#66FCF1]" />
              </Link>
              <Link href="https://github.com/thedudeontitan">
                <FiTwitter className="hover:scale-125 transition-all duration-500 hover:text-[#66FCF1]" />
              </Link>
              <div className="border-l-2 h-32 border-white" />
            </div>
          </div>
          <div className="hidden lg:fixed lg:flex flex-row right-0 bottom-0 mr-14 text-white z-20">
            <div className="text-base flex flex-col items-center gap-y-5">
              <Link href="mailto:ankitkokane90@gmail.com">
                <span className="[writing-mode:vertical-lr] hover:scale-110 transition-all duration-500 hover:text-[#66FCF1]">
                  ankitkokane90@gmail.com
                </span>
              </Link>
              <div className="border-r-2 h-32 border-white" />
            </div>
          </div>
        </main>
        <footer className="bg-[#0B0C10]">
          <div className="w-full flex flex-col items-center text-[#f3f3f3] font-mono text-sm">
            <Link href="https://github.com/thedudeontitan/thedudeontitan.github.io.new" target="_blank" className="my-10 hover:text-[#66FCF1] hover:scale-[1.02] transition-all">
              <div className="flex flex-col items-center gap-y-2">
                <span>Built By Ankit Kokane</span>
                <span className="flex flex-row items-center gap-x-2">
                  <FiGithub />
                  Github Repo
                </span>
              </div>
            </Link>
          </div>
        </footer>
        </Loading>
      </body>
    </html>
  );
}
