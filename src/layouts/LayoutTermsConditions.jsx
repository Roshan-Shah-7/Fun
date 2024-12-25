import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import TermsConditions from "../components/TermsConditions/TermsConditions";
import cn from "classnames";

const LayoutTermsConditions = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <TermsConditions />

      <FooterOne />
    </div>
  );
};

export default LayoutTermsConditions;
