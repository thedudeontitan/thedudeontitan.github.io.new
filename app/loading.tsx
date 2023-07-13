import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="">
      <div className="flex min-h-screen justify-center items-center bg-[#0B0C10]">
        <div className="text-[#f3f3f3]">
          <Image src="/assets/logo.png" width={200} height={200} alt="logo" className="animate-pulse"/>
        </div>
      </div>
    </div>
  );
}

export default Loading;
