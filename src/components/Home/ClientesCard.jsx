import React from "react";
import { clientes } from "../../data/clientes";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ClientesCard = () => {
  return clientes.map((data, key) => {
    return (
      <SwiperSlide key={data.id}>
        <article className={`section-clients--card card-${data.id}`}>
          <div className="section-clients--info">
            <p className="text section-clients--text">PARTNERS</p>
            <h2 className="subtitle section-clients--subtext">
              NUESTROS PARTNERS
            </h2>
            <ul className="section-clients--list">
              <li className="title section-clients--item">IMPLEMENTACIÓN</li>
              <li className="title section-clients--item">DISEÑO UX/UI</li>
              <li className="title section-clients--item">FRONTEND</li>
            </ul>
            <button className="buttonHome section-clients--btn">
              EXPLORAR
            </button>
          </div>
          <div className="section-clients--images">
            <picture className="section-clients--pc">
              <img src={data.image} alt="" className="section-clients--image" />
            </picture>
            <img src={data.logo} alt="" className="section-clients--logo" />
          </div>
        </article>
      </SwiperSlide>
    );
  });
};

export { ClientesCard };
