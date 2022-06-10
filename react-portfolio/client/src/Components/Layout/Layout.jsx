import React from "react";
import InfoFooter from "../InfoFooter/InfoFooter";
import TopNav from "../TopNav/TopNav";

export default function Layout(props) {
  return (
    <>
      <div className={props.className}>
        <TopNav />
        {props.children}
        <InfoFooter />
      </div>
    </>
  );
}
