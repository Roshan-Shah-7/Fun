import React from "react";
import Banner from "../../components/Banner/Banner";
import LayoutTermsConditions from "../../layouts/LayoutTermsConditions";

const TermsConditions = () => {
  return (
    <LayoutTermsConditions>
        <Banner />
        <TermsConditions />
    </LayoutTermsConditions>
  );
};

export default TermsConditions;
