import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/components/ContactForm.sass";

const ContactForm = ({ name, modifier, children, handle }) => {
  return (
    <section className="extrafooter-contactForm">
      <p className="title extrafooter-contactForm--index">PARTNERS</p>
      <p className="extrafooter-contactForm--title">CONTÁCTENOS</p>
      <p className="text extrafooter-contactForm--description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, dolor
        provident. Repellat corrupti quam eaque quos rem rerum cum! Facere,
        dolore ducimus voluptas odit velit tempore culpa earum aliquam eos!
      </p>
      <form action="" method="post" className="extrafooter-contactForm--form">
          <input className="text  extrafooter-contactForm--text" type="text" placeholder="Nombre" />
          <input className="text  extrafooter-contactForm--text" type="text" placeholder="Correo"/>
          <input className="text  extrafooter-contactForm--text" type="text" placeholder="Telefono"/>
          <input className="text  extrafooter-contactForm--text" type="text" placeholder="Mensaje"/>
        <input className="text  extrafooter-contactForm--sumbit" type="button" value="ENVIAR" />
      </form>
    </section>
  );
};

export { ContactForm };
