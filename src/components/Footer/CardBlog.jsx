import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/components/Blog.sass";


const CardBlog = ({ title, image , description}) => {
  return (
      <article className="blog-section-card">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
  );
};

export { CardBlog };
