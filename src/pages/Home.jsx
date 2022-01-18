import React from "react";
import { Card, Blog } from "../components";
import Logo from "../assets/images/home/Logo.svg";
import "../styles/sass/pages/Home.sass";
import card1 from "../assets/images/home/image-card1-home.png";
import card2 from "../assets/images/home/image-card2-home.png";
import card3 from "../assets/images/home/image-card3-home.png";
import card4 from "../assets/images/home/image-card4-home.png";
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
      <Card
        title="SERVICIOS"
        subtitle="MARKETING ECOMMERCE"
        description="Sumamos tecnología y análisis de informacion del comercio, para generar estrategias... "
        modifier="second"
        image={card1}
      />
      <Card
        title="SERVICIOS"
        subtitle="DESARROLLO DE TIENDAS"
        description="Nuestro equipo de desarrollo es robusto y con una gran experiencia en Vtex..."
        modifier="third"
        image={card2}
      />
      <Card
        title="SERVICIOS"
        subtitle="SOPORTE TÉCNICO VTEX"
        description="Somos expertos en Vtex, Nuestro equipo tiene años de experiencia en esta plataforma..."
        modifier="fourth"
        image={card3}
      />
      <Card
        title="SERVICIOS"
        subtitle="MARKETING ECOMMERCE"
        description="Un área eCommerce Profesional, al servicio de tu canal Online...  "
        modifier="fifth"
        image={card4}
      />
      <section className="section-partners">
        <h2 className="section-partners--title">ALGUNOS DE NUESTROS PARTNERS ALIADOS</h2>
          <img className="section-partners--image" src={partners} alt="" />
      </section>
      <section className="extraFooter">
        <Blog/>
      </section>
    </main>
  );
};

export { Home };
