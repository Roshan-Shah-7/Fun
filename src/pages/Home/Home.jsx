import React from "react";
import Banner from "../../components/Banner/Banner";
import NoTimeLimit from "../../components/NoTimeLimit/NoTimeLimit";
import ContactOne from "../../components/Contact/ContactOne";
import Roadmap from "../../components/Roadmap/Roadmap";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import TradeUpTo from "../../components/TradeUpTo/TradeUpTo";
import Faq from "../../components/Faq/Faq";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";

const Home = () => {
  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
        
        <WhoWeAre />

        <TradeUpTo />

        <div className="area-bg">
          <Roadmap />
          {/* <WhitePaper /> */}
        </div>

        <WhyChooseUs />

        <NoTimeLimit />
        
        <Sales />
        <Faq />
        <WhyChoose />
        <ContactOne />
        <TopPartners />
      </main>
    </LayoutOne>
  );
};

export default Home;
