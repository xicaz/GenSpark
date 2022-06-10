import React from "react";
import { Link } from "react-router-dom";
import "./InfoFooter.css";

export default function InfoFooter() {
  return (
    <Link to="/" exact>
      <div className="hover:underline underline-offset-8 sticky bottom-0 left-0 footer-body text-2xl font-medium bg-black whitespace-nowrap  py-3 pr-14 pl-10 text-white w-full">
        <p className=" flex justify-around">
          {/* JEXICA AYRAN () =&gt; BArch &#8594; Design &#8594; Full-Stack Web
          Development &#8594; Creative Developer */}
          JEXICA AYRAN | BArch Design | Full-Stack Web Development | Creative
          Developer
        </p>
      </div>
    </Link>
  );
}
