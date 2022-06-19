import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  let navigate = useNavigate();

  const handleMain = (e) => {
    // made homepage faster
    navigate("/", { replace: true });
  };
  return (
    <div className="nav-container border-b border-b-black">
      <div className="nav-body flex justify-around items-center text-md sm:text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap py-5 pr-5 pl-5 text-black w-full max-w-[1500px] m-auto">
        <Link to="/">
          <div>
            <span
              onClick={handleMain}
              className="hover:underline hover:underline-offset-8 hover:font-light text-xl sm:text-2xl md:text-3xl p-0 m-0 top-3"
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
        {!props.id ? (
          <Link to="/login">
            <div className="">
              <span className="hover:underline hover:underline-offset-8 hover:font-light">
                Login
              </span>
            </div>
          </Link>
        ) : null}
        {/* <Link to="/about">
          <div className="">
            <span className="hover:underline hover:underline-offset-8 hover:font-light ">
              About
            </span>
          </div>
        </Link> */}
        {props.id ? (
          <>
            <Link to="/lists">
              <div className="">
                <span className="hover:underline hover:underline-offset-8 hover:font-light ">
                  Lists
                </span>
              </div>
            </Link>
            <Link to="/account">
              <div className="max-w-[110px] md:max-w-[unset] text-ellipsis overflow-hidden">
                <span className="hover:underline hover:underline-offset-8 hover:font-light">
                  {props.username}
                </span>
              </div>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
