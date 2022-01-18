import React from "react";
import "../../styles/sass/components/footer.sass";
import "../../styles/sass/components/Styles.sass";
import logo from "../../assets/images/footer/partnervtex-logo.png";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import linkedin from "../../assets/images/footer/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <article className="footer-article">
          <ul className="footer-article-list">
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Nosotros
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Nuestro Equipo
              </a>
            </li>
          </ul>
        </article>

        <article className="footer-article">
          <ul className="footer-article-list">
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Nuestros Servicios
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Desarrollo Ecommerce
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Desarrollo Back-end
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Desarrollo Front-end
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Analítica y Bi
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Marqueting para Ecommerce
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Actualizacion y optimizacion de sitios
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Inbound Marketing
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                SEO
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Data Managment
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Diseño UI
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Diseño Gráfico
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Venta no presencial / Atencion H2H
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Marketplaces y plataformas externas
              </a>
            </li>
          </ul>
        </article>
        <article className="footer-article">
          <ul className="footer-article-list">
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Nuestros Partners
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Importadoras Asociadas
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Recamier
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Libreria Lerner
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Arturo Calle
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Racketball
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Stilotex
              </a>
            </li>
          </ul>
        </article>
        <article className="footer-article">
          <ul className="footer-article-list">
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Contáctenos
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Correo electronico
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Telefonos de contacto
              </a>
            </li>
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Direccion de oficina
              </a>
            </li>
          </ul>
        </article>
        <article className="footer-article">
          <ul className="footer-article-list">
            <li className="footer-article-item">
              <a className="footer-article-link" href="">
                Nuestras Redes
              </a>
            </li>
            <li>
              <a className="footer-article-social" href="">
                <img src={facebook} alt="" />
              </a>
              <a className="footer-article-social" href="">
                <img src={linkedin} alt="" />
              </a>
              <a className="footer-article-social" href="">
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </article>
      </section>
      <div className="footer-logo">
        <picture className="footer-logo-img">
          <img className="footer-logo-image" src={logo} alt="" />
        </picture>
      </div>
    </footer>
  );
};

export { Footer };
