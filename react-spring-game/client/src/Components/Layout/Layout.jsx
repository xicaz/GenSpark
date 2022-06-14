import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="w-screen h-screen z-10">
      <NavBar />
      {props.children}
    </div>
  );
}
