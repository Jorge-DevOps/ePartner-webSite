import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, subtitle, description, image, modifier, vector1 , vector2 ,vector3   }) => {
  return (

    <section className="section-home">

      <article className={`containerH section-home--${modifier}`}>
      <div className="section--title2">
        <h1 className="titleH2">SERVICIOS</h1>
      </div>

          <div className={`cardHome section-home--description${modifier}`}>

          <p className={`title section-home--title${modifier}`}>{title}</p>
              <h2 className={`subtitle section-home--subtitle${modifier}`}>{subtitle}</h2>
              <p className={`descripH section-home--descrip${modifier}`}>{description}</p>
              <button className={`buttonHome section-home--btn${modifier}`}>EXPLORAR</button>
                <img className={`vectorCardH section-home--picture${modifier}1`} src={vector1} alt="" />      
                <img className={`vectorCardH2 section-home--picture${modifier}`} src={vector2} alt="" />      
                <img className={`vectorCardH section-home--picture${modifier}2`} src={vector3} alt="" />      

          </div>
          <div className="section-home--image">
            <img className="section-home--picture" src={image} alt="" />      
        </div>
      </article>
    </section>
  );
};

export { Card };
