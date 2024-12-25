import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import RiskDisclosure from "../components/RiskDisclosure/RiskDisclosure";
import cn from "classnames";

const LayoutRiskDisclosure = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <RiskDisclosure />

      <FooterOne />
    </div>
  );
};

export default LayoutRiskDisclosure;
