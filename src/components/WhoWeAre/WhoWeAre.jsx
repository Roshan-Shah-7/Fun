import React from "react";
import img01 from "../../assets/img/images/about_img03.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".5s">
              <img src={img01} alt="" />
              <img src={img02} alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-30">
                <h2 className="title">
                  We redefine trading by offering a transparent <br /> and authentic funded program
                </h2>
              </div>
              <p>
                At FundedVibe, we redefine trading by offering a transparent and authentic
                funded program that empowers traders to succeed with 100% real accounts not demos.
              </p>
              <Link to="/About" className="btn">
                view more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
