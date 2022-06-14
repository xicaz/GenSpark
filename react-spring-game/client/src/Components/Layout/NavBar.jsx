import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  const handleMain = (e) => {
    // made homepage faster
    navigate("/", { replace: true });
  };
  return (
    <div className="nav-container">
      <div className="nav-body flex justify-around grid-cols-5 text-2xl font-bold tracking-wide whitespace-nowrap border border-black py-5 pr-14 pl-10 text-black w-full">
        <Link to="/">
          <div>
            <span
              onClick={handleMain}
              className="hover:underline hover:underline-offset-8 hover:font-light text-3xl p-0 m-0 absolute top-3"
            >
              ☝
            </span>
          </div>
        </Link>
        <Link to="/games">
          <div className="">
            <span className="hover:underline hover:underline-offset-8 hover:font-light">
              Games
            </span>
          </div>
        </Link>
        <Link to="/login">
          <div className="">
            <span className="hover:underline hover:underline-offset-8 hover:font-light">
              Login
            </span>
          </div>
        </Link>
        <Link to="/about">
          <div className="">
            <span className="hover:underline hover:underline-offset-8 hover:font-light ">
              About
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
