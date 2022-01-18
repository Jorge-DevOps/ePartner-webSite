import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/components/Blog.sass";
import { CardBlog } from "../../components";
import articlesData from "../../data/articlesData.js";

const Blog = () => {
  return (
    <section className="blog-section">
      {articlesData.map((data, key) => {
        return (
          <div key={key}>
            {data.id +
              " , " +
              data.title +
              " ," +
              data.stockPrice +
              ", " +
              data.timeElapsed}
          </div>
        );
      })}
    </section>
  );
};

export { Blog };
