import React from "react";
import "../../index.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <h1 className="text-2xl font-light">Hello I'm</h1>
        <h1 className="text-3xl font-bold">Rakibul Hasan Rifat</h1>
        <h5 className="font-xl text-gray-400 font-extralight">UI/UX Designer and Frontend Developer</h5>
        <CTA/>
      </div>
    </header>
  );
};

export default Header;
