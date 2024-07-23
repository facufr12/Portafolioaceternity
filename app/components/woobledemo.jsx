"use client";
import React from "react";
import Image from "next/image";
import { WobbleCard } from "./wobble-card";
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
    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Lit up borders
        </div>
      </button>
 
  </WobbleCard>
</div>

  );
}
