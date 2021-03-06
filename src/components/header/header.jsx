import React from "react";
import "../../index.css";
import CTA from "./CTA";
import ME from "../../assets/profile.png"
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <header id="home">
      <div className="container header__container mx-auto ">
        <h1 className="text-2xl font-light">Hello I'm</h1>
        <h1 className="text-3xl font-semibold">Rakibul Hasan Rifat</h1>
        <h5 className="font-xl text-slate-300 font-light">UI/UX Designer and Frontend Developer</h5>
        <CTA/>

        <HeaderSocials/>


        <div className="me">
          <img src={ME} alt="Rakibul Hasan" className="inline-block"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

      
    </header>
  );
};

export default Header;
