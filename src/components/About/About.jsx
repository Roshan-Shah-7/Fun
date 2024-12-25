import React from "react";
import aboutImg from "../../assets/img/images/about_img03.png";
import shape02 from "../../assets/img/images/chart.png";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <h2 className="title">
                  About Funded Vibe
                </h2>
              </div>
              <p>At <strong>FundedVibe,</strong> We think that giving traders access to 100% actual accounts—not demos—will enable them to reach their greatest potential. Our goal is simple but revolutionary: to transform the prop firm sector by providing traders with genuine chances to prosper through unmatched transparency, sincerity, and support.
              </p>
              <p>Whether you're an experienced trader or just starting out, our <strong>funded programs</strong> are designed to elevate your trading journey. With FundedVibe, you can trade with real money, receive real incentives, and have a real trading experience—just like it should be. Say goodbye to simulations and tricks.</p>
            </div>
          </div>
        </div>
        <div className="about-content-two about-set wow fadeInRight" data-wow-delay=".2s">
            <div className="section-title section-title-two mb-15">
              <h2 className="title">
                What Sets Us Apart?
              </h2>
            </div>
            <p>At FundedVibe, we are committed to fostering a culture of growth, innovation, and transparency. We don’t just offer accounts—we provide a comprehensive ecosystem to help you succeed in the real trading world.</p>
            <p><strong>Join FundedVibe today, and let’s trade the real way.</strong></p>
            <div className="about-list">
              <ul>
                <li>
                  <i class="fa fa-fire"></i><strong>No Demos:</strong> We don’t believe in simulated accounts. We give you access to <strong>live trading accounts</strong> to ensure your skills and strategies are applied where they matter most.
                </li>
                <li>
                  <i class="fa fa-fire"></i><strong>Cutting-Edge Technology:</strong> Our advanced trading platform is equipped with state-of-the-art tools and features to support your success.
                </li>
                <li>
                  <i class="fa fa-fire"></i><strong>Unmatched Support:</strong> With 24/7 customer service, we’re here to guide you at every stage of your trading journey.
                </li>
                <li>
                  <i class="fa fa-fire"></i><strong>Programs for Everyone:</strong> From experts to those just starting, our funded programs are customized to meet the needs of traders from all walks of life.
                </li>
              </ul>
            </div>
        </div>
        <div className="about-mission">
          <div className="row align-items-center">
            <div className="col-lg-7 text-left">
              <div
                className="about-content-two wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="section-title section-title-two mb-15">
                  <h2 className="title">
                    Our Mission
                  </h2>
                </div>
                <p>At FundedVibe, our mission is to revolutionize the trading landscape by empowering traders with <strong>funded accounts that offer genuine opportunities</strong> to succeed.</p>
                <p>We are committed to <strong>simplifying the trading experience,</strong> breaking down barriers, and eliminating unnecessary restrictions that hinder traders' growth. Our objective is to establish an open and encouraging environment where traders of all backgrounds and skill levels can benefit.</p>
                <p>By providing access to <strong> state-of-the-art tools, cutting-edge technology,</strong> and <strong></strong> we aim to equip traders with everything they need to succeed in the global markets. At FundedVibe, we’re not just building a platform; we’re cultivating a community of traders driven by opportunity, authenticity, and excellence.</p>
              </div>
            </div>
            <div className="col-lg-5 text-right">
              <div
                className="about-content-two wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="section-title section-title-two mb-15">
                  <h2 className="title">
                    Our Vision
                  </h2>
                </div>
                <p>At FundedVibe, our vision is to become the global leader in transforming the trading experience by fostering a world where every trader, regardless of background or expertise, has access to real opportunities and the resources needed to succeed.</p>
                <p>We envision a trading ecosystem built on transparency, authenticity, and innovation, where traders are empowered to reach their full potential through genuine funded accounts and unmatched support. By continually advancing our technology and redefining industry standards, we aim to shape a future where trading is simplified, inclusive, and rewarding for everyone.</p>
                <h6>FundedVibe—pioneering a new era of trading excellence.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        {/* <img src={shape02} alt="" className="shape-two rotateme" /> */}
      </div>
    </section>
  );
};

export default About;
