import React from "react";
import PropTypes from "prop-types";
import "../styles/sass/components/Layout.sass";
import { Header, Footer } from "../components";

const LayoutPage = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <div className="layout-container">
        <main >{children}</main>
        <Footer />
      </div>
    </section>
  );
};

LayoutPage.defaultProps = {
  children: null,
};

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LayoutPage };
