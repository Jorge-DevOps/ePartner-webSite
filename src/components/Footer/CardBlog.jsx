import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/components/Blog.sass";
import { posts } from "../../data/posts";

const CardBlog = () => {
  return posts.map((data, key) => {
    return (
      <article className="blog-section-card" key={key}>
        <img className="blog-section-image" src={data.image} alt="" />
        <h3 className="blog-section-title">{data.title}</h3>
        <p className="blog-section-description">{data.description}</p>
      </article>
    );
  });
};

export { CardBlog };
