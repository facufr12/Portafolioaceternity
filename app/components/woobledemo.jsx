"use client";
import React from "react";
import Image from "next/image";
import { WobbleCard } from "./wobble-card";
import logo from "../../public/f.jpg"
export default function WobbleCardDemo() {
  return (
<div className="flex justify-center mt-40 max-w-7xl mx-auto w-full">
  <WobbleCard containerClassName="bg-transparent min-h-[200px] max-w-md w-full mx-auto">
    <div className="px-4 py-6">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
      </h2>
      
      <p className="mt-4 text-left text-base text-neutral-200">
        With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.
      </p>
    
    </div>
    <button className="px-14 mt-6 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
        Resume
      </button>
    <Image
      src="/f.webp"
      width={500}
      height={500}
      alt=""
      className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
    />
  </WobbleCard>
</div>

  );
}
