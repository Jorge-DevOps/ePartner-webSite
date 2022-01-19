import React from "react";
import { Card, Blog, ContactForm, Clientes } from "../components";
import Logo from "../assets/images/home/Logo.svg";
import "../styles/sass/pages/Home.sass";
import card1 from "../assets/images/home/image-card1-home.png";
import card2 from "../assets/images/home/image-card2-home.png";
import card3 from "../assets/images/home/image-card3-home.png";
import card4 from "../assets/images/home/image-card4-home.png";
import icon1card1 from "../../src/assets/images/home/icons/globo3d-1.png"
import icon2card1 from "../../src/assets/images/home/icons/globo3d-2.png"
import icon3card1 from "../../src/assets/images/home/icons/globo3d-3.png"

import icon1card2 from "../../src/assets/images/home/icons/globo3d-4.png"
import icon2card2 from "../../src/assets/images/home/icons/vector3d-1.png"
import icon3card2 from "../../src/assets/images/home/icons/globo3d-6.png"

import icon1card3 from "../../src/assets/images/home/icons/globo3d-5.png"
import icon2card3 from "../../src/assets/images/home/icons/vector3d-2.png"
import icon3card3 from "../../src/assets/images/home/icons/globo3d-7.png"


import icon1card4 from "../../src/assets/images/home/icons/globo3d-8.png"
import icon2card4 from "../../src/assets/images/home/icons/vector3d-3.png"
import icon3card4 from "../../src/assets/images/home/icons/globo3d-9.png"

import partners from "../assets/images/home/partners.png";

const Home = () => {
  return (
    <main className="section">
      <section className="section-home">
        <article className="section-home--firts">
          <img className="section-home--logo" src={Logo} alt="" />
        </article>
      </section>
      <div className="section--title">
        <h1 className="titleH">SERVICIOS</h1>
      </div>
    <div className="section-cards">
    <Card
        title="SERVICIOS"
        subtitle="MARKETING ECOMMERCE"
        description="Sumamos tecnología y análisis de informacion del comercio, para generar estrategias... "
        modifier="second"
        image={card1}
        vector1={icon1card1}
        vector2={icon2card1}
        vector3={icon3card1}

      />
      <Card
        title="SERVICIOS"
        subtitle="DESARROLLO DE TIENDAS"
        description="Nuestro equipo de desarrollo es robusto y con una gran experiencia en Vtex..."
        modifier="third"
        image={card2}
        vector1={icon1card2}
        vector2={icon2card2}
        vector3={icon3card2}

      />
      <Card
        title="SERVICIOS"
        subtitle="SOPORTE TÉCNICO VTEX"
        description="Somos expertos en Vtex, Nuestro equipo tiene años de experiencia en esta plataforma..."
        modifier="fourth"
        image={card3}
        vector1={icon1card3}
        vector2={icon2card3}
        vector3={icon3card3}

      />
      <Card
        title="SERVICIOS"
        subtitle="MARKETING ECOMMERCE"
        description="Un área eCommerce Profesional, al servicio de tu canal Online...  "
        modifier="fifth"
        image={card4}
        vector1={icon1card4}
        vector2={icon2card4}
        vector3={icon3card4}

      />

    </div>
      <section className="section-partners">
        <h2 className="section-partners--title">
          ALGUNOS DE NUESTROS PARTNERS ALIADOS
        </h2>
        <img className="section-partners--image" src={partners} alt="" />
      </section>
      <Clientes />
      <section className="extraFooter">
        <Blog />
        <ContactForm />
      </section>
    </main>
  );
};

export { Home };
