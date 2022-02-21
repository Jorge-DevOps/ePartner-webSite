import React from "react";
import PropTypes from "prop-types";

const Cards = ({ title, subtitle, description, image, modifier, vector1 , vector2 ,vector3   }) => {
  return (

    <section className="section-info">

      <article className={`containerH section-info--${modifier}`}>
      <div className="section--title2">
        <h1 className="titleH2">SERVICIOS</h1>
      </div>

          <div className={`cardinfo section-info--description${modifier}`}>

          <p className={`title section-info--title${modifier}`}>{title}</p>
              <h2 className={`subtitle section-info--subtitle${modifier}`}>{subtitle}</h2>
              <p className={`descripH section-info--descrip${modifier}`}>{description}</p>
              <button className={`buttoninfo section-info--btn${modifier}`}>EXPLORAR</button>
                <img className={`vectorCardH section-info--picture${modifier}`} src={vector1} alt="" />      
                <img className={`vectorCardH section-info--picture${modifier}`} src={vector2} alt="" />      
                <img className={`vectorCardH section-info--picture${modifier}`} src={vector3} alt="" />      

          </div>
          <div className="section-info--image">
            <img className="section-info--picture" src={image} alt="" />      
        </div>
      </article>
    </section>
  );
};

export { Cards };
