import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import About from "../components/About/About";
import cn from "classnames";

const LayoutAbout = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <About />

      <FooterOne />
    </div>
  );
};

export default LayoutAbout;
