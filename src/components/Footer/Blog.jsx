import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/components/Blog.sass";
import { CardBlog } from "../../components";

const Blog = () => {
  return (
    <section className="blog-container">
      <h2 className="blog-section-title1">BLOG EPARTNER</h2>
      <div className="blog-section">
        <CardBlog />
      </div>
    </section>
  );
};

export { Blog };
