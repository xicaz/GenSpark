import React from "react";
import Layout from "../Components/Layout/Layout";

export default function About() {
  return (
    <>
      <Layout>
        <div className="p-10 w-screen h-screen flex flex-row justify-center mb-0 sm:mb-44 md:mb-44 lg:mb-0 ">
          <div className="  p-12 glassmorphism-bg mx-5 h-max lg:max-h-96 md:h-max sm:h-min top-0 left-0  relative border border-black rounded-large">
            <div className=" w-full z-10">
              <p className="leading-8 bold text-xl">
                Hello, <br />
                <br />
                I’m a creative developer from SF Bay Area, currently based in
                NYC.
                <br />
                <br />
                2016: Barch from California College of the Arts. (SF, CA)
                <br className="mb-7 block" />
                2018: multi-discplinary designer and self-teaching programming
                basics. (NYC, NY)
                <br className="mb-7 block" />
                2021: General Assembly: Fullstack Development Bootcamp. MERN
                tech stack + Ruby on Rails. (NYC, NY) <br />
                <br />
                Based in NYC + Open to remote work.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
