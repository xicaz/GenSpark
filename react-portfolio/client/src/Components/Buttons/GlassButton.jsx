import React from "react";
import "./GlassButton.css";

export default function GlassButton() {
  return (
    <div className="w-screen relative">
      <div className="z-10 text-2xl pb-10  glass-body  w-screen  flex  flex-col lg:flex-row md:flex-col sm:flex-col justify-center">
        <div className="">
          <div className=" mx-5 mt-10  w-96">
            <p className=" flex justify-around text-white rounded-full py-5 px-14 whitespace-nowrap font-bold tracking-wider bg-black text-3xl ">
              web development
            </p>
          </div>
          <div className=" mx-5  mt-5  w-96 h-24 ">
            <p className="design-text  border font-medium flex justify-around text-black rounded-full py-5 px-14 whitespace-nowrap  tracking-wider bg-yellow text-2xl ">
              design :creative
            </p>
          </div>
          <div className="glassmorphism-bg2 text-right py-10 px-30 mx-5  mb-7  w-96 h-72 border border-black rounded-large flex justify-around">
            <p className="name-logo  font-bold pr-5"> jexica ayran</p>
          </div>
        </div>
        <div className="glassmorphism-bg mx-5 p-10 top-0 left-0  relative  w-96 border border-black rounded-large">
          <div className=" w-full z-10">
            <p className="italic text-3xl">
              Hello, <br className="mb-3" />
              I’m a creative developer, specializing in React/MERN tech stack,
              Java, and web to product design. <br className="mb-3" />
              Based in NYC + Open to remote work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
