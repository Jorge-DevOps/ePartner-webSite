import React from "react";
import { BannerTop } from "../components";
import Bannertop from "../assets/images/nosotros/banner-nosotros-desk.png";
import { ContactForm } from "../components";
const Nosotros = () => {
  return (
    <div>
      <h1>Nosotros</h1>
      <BannerTop image={Bannertop} modifier="nosotros"/>
      <ContactForm/>
    </div>
  );
};

export { Nosotros };
