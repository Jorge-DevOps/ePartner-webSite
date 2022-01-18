import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/components/ContactForm.sass";

const ContactForm = ({ name, modifier, children, handle }) => {
  return (
    <section>
      <p>PARTNERS</p>
      <p>CONTÁCTENOS</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, dolor
        provident. Repellat corrupti quam eaque quos rem rerum cum! Facere,
        dolore ducimus voluptas odit velit tempore culpa earum aliquam eos!
      </p>
      <form action="" method="post">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        <input type="button" value="ENVIAR" />
      </form>
    </section>
  );
};

export { ContactForm };
