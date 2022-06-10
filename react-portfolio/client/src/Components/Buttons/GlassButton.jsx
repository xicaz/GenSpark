import React from "react";
import "./GlassButton.css";

export default function GlassButton() {
  return (
    <div className="w-screen  relative">
      <div className="p-10 sm:px-5 glass-body w-screen text-2xl flex  flex-row justify-center">
        <div className="mx-5 p-10 top-0 left-0  absolute glassmorphism  w-96 border border-black rounded-large">
          <div className="glassmorphism w-full">
            <p className="italic">
              Hello, I’m a creative developer, specializing in React/MERN tech
              stack, Java, and web to product design. Based in NYC + Open to
              remote work.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" mx-5 w-96 h-24">
            <p className=" flex justify-around text-white rounded-full py-3 px-10 whitespace-nowrap font-medium tracking-widest bg-black text-2xl ">
              web development
            </p>
          </div>
          <div className=" mx-5 w-96 h-24">
            <p className=" flex justify-around text-white rounded-full py-3 px-10 whitespace-nowrap font-medium tracking-widest bg-black text-2xl ">
              design ::creative
            </p>
          </div>
          <div className="py-8 px-14 mx-5 top-0 left-0 absolute glassmorphism w-96 h-64 border border-black rounded-large">
            <p className="name-logo text-right font-bold"> jexica ayran</p>
          </div>
        </div>
      </div>
    </div>
  );
}
