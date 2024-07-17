"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import WobbleCardDemo from "./components/woobledemo";
import AnimatedModalDemo from "./components/animateddemo."
export default function Home() {
  return (
   <div>
    <Navbar />
    <WobbleCardDemo />
   </div>
  );
}
