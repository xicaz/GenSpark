import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      {props.children}
    </div>
  );
}
