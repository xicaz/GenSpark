import React from "react";
import Layout from "../Components/Layout/Layout";
import "../Screens/Portfolio.css";

export default function Portfolio() {
  const classBg = "bg-gradient-to-r from-white to-red-300";
  const projectContainerClass =
    "mb-5 hover:border-black border border-white mx-10  p-16 px-7 drop-shadow-lg rounded-large w-72 h-72 filter invert backdrop-invert backdrop-blur-xl z-1";
  return (
    <>
      <Layout className={classBg}>
        <div className="z-0 portfolio-logo absolute pl-20  ">portfolio</div>
        <div className=" flex w-screen h-screen pt-28 m-auto justify-around ">
          <div className="justify-around flex  flex-col  lg:flex-row md:flex-col sm:flex-col ">
            <div className={projectContainerClass}>
              <span className="z-20 text-wrap project-name text-black underline-offset-8 hover:underline">
                <a href="https://github.com/xicaz/GenSpark/tree/main/boarding-pass">
                  Boarding Pass
                </a>
              </span>
            </div>
            <div className={projectContainerClass}>
              <span className="z-20 text-wrap project-name text-black underline-offset-8 hover:underline">
                <a href="https://github.com/xicaz/GenSpark/tree/main/frontend-webform">
                  Customer Form
                </a>
              </span>
            </div>
            <div className={projectContainerClass}>
              <span className="z-20 text-wrap project-name text-black underline-offset-8 hover:underline">
                <a href="https://github.com/xicaz/GenSpark/tree/main/SpringBootApp">
                  Spring Boot App
                </a>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
