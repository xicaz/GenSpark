import React from "react";
import GlassButton from "../Components/Buttons/GlassButton.jsx";
import SkillButton from "../Components/Buttons/SkillButtons.jsx";
import Layout from "../Components/Layout/Layout.jsx";
import { defaultSkillBtn } from "../Components/Utilities/BtnClass.js";
import "./Home.css";

export default function Home(props) {
  return (
    <>
      <Layout>
        <GlassButton />
        <SkillButton />
      </Layout>
    </>
  );
}
