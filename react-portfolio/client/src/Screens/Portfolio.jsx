import React from "react";
import Layout from "../Components/Layout/Layout";
import "../Screens/Portfolio.css";

export default function Portfolio() {
  const projectContainerClass =
    "mx-10  p-24 drop-shadow-lg border border-red rounded-large w-96 h-96 filter invert backdrop-invert backdrop-opacity-50  backdrop-blur-xl z-1";
  return (
    <>
      <Layout>
        <div className="z-0 portfolio-logo absolute pl-20  ">portfolio</div>
        <div className="w-screen h-screen pt-28">
          <div className="flex flex-row justify-center">
            <div className={projectContainerClass}>
              <span className="z-20 text-wrap project-name text-black">
                <a href="https://github.com/xicaz/GenSpark/tree/main/boarding-pass">
                  Boarding Pass
                </a>
              </span>
            </div>
            <div className={projectContainerClass}>
              <span className="z-20 text-wrap project-name text-black">
                <a href="https://github.com/xicaz/GenSpark/tree/main/frontend-webform">
                  Customer Form
                </a>
              </span>
            </div>
            <div className={projectContainerClass}>
              <span className="z-20 text-wrap project-name text-black">
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
