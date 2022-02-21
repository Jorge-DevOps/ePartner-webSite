import React from "react";
import logo from "../../assets/images/ePartner/Logo/logo.png";
import hamburger from "../../assets/images/Menu/icono-menu-hamburguesa.png";

import "../../styles/sass/components/Header.sass";

const Header = () => {
  return (
    <header className="header-site">
      <section className="header-site--nav">
        <div className="header-site--logo">
          <a href="#" className="header-site--link">
          <img src={logo} alt="" className="header-site--imgLogo"/>
          </a>
        </div>
        <div className="header-site--text">
          <p className="header-site--namePage">Home</p>
        </div>
        <div className="header-site--imageContent">
          <img src={hamburger} alt="" className="header-site--image" />
        </div>
      </section>


      
      <nav className="header-site"></nav>
    </header>
  );
};

export { Header };
