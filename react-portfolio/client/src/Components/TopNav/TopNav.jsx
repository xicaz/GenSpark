import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

export default function TopNav() {
  const arrow = "-> ";
  const email = "jexica.ayran@gmail.com";
  const resume = "resume";
  const portfolio = "portfolio";
  const about = "about";
  return (
    <div className="nav-container p-5">
      <div className="nav-body flex justify-around grid-cols-5 text-lg tracking-wide font-medium  bg-black whitespace-nowrap rounded-full py-3 pr-14 pl-10 text-white w-full">
        <Link to="">
          <div>
            <span>{arrow}</span>
            <span className="underline-offset-8 hover:underline">{email}</span>
          </div>
        </Link>
        <Link to="">
          <div className="">
            <span>{arrow}</span>
            <span className="underline-offset-8 hover:underline">{resume}</span>
          </div>
        </Link>
        <Link to="/portfolio">
          <div className="">
            <span>{arrow}</span>
            <span className="underline-offset-8 hover:underline">
              {portfolio}
            </span>
          </div>
        </Link>
        <Link to="/about">
          <div className="">
            <span>{arrow}</span>
            <span className="underline-offset-8 hover:underline ">{about}</span>
          </div>
        </Link>
        <div className="">💡</div>
      </div>
    </div>
  );
}
