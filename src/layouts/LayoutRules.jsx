import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import Rules from "../components/Rules/Rules";
import cn from "classnames";

const LayoutRules = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <Rules />

      <FooterOne />
    </div>
  );
};

export default LayoutRules;
