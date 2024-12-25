import React from "react";
import Banner from "../../components/Banner/Banner";
import LayoutDisclaimer from "../../layouts/LayoutsDisclaimer";

const Disclaimer = () => {
  return (
    <LayoutDisclaimer>
        <Banner />
        <Disclaimer />
    </LayoutDisclaimer>
  );
};

export default Disclaimer;
