import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-body flex justify-around grid-cols-5 text-2xl font-bold tracking-wide whitespace-nowrap border border-black py-5 pr-14 pl-10 text-black w-full">
        <Link to="">
          <div>
            <span className="hover:text-yellow">Home</span>
          </div>
        </Link>
        <Link to="">
          <div className="">
            <span className="hover:text-yellow">Games</span>
          </div>
        </Link>
        <Link to="/login">
          <div className="">
            <span className="hover:text-yellow">Login</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="">
            <span className="hover:text-yellow ">About</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
