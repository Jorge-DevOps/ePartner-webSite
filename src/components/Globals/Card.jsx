import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, subtitle, description, image, modifier,  }) => {
  return (
    <section className="section-home">
      <article className={`containerH section-home--${modifier}`}>
          <div className="section-home--description">
          <p className={`title section-home--title${modifier}`}>{title}</p>
              <h2 className={`subtitle section-home--subtitle${modifier}`}>{subtitle}</h2>
              <p className={`descripH section-home--descrip${modifier}`}>{description}</p>
              <button className={`buttonHome section-home--btn${modifier}`}>EXPLORAR</button>
          </div>
          <div className="section-home--image">
            <img className="section-home--picture" src={image} alt="" />      
        </div>
      </article>
    </section>
  );
};

export { Card };
