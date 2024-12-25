import React from "react";
import img01 from "../../assets/img/icon/support.png";
import img02 from "../../assets/img/icon/infinite-time.png";
import img03 from "../../assets/img/icon/checkmark.png";
import { Link } from "react-router-dom";

const NoTimeLimit = (props) => {
  return (
    <section id="tradeup" className="tradeup-area notimelimit pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="tradeup-content notimelimit-content wow fadeInRight" data-wow-delay=".2s">
                  <div className="section-title">
                    <h4 className="title">
                      It’s Time to <br />Level Up
                    </h4>
                    <p>Trade the Real Markets with Real Money.<br />
                    Simple, yet Effective Trading Rules</p>
                  </div>
                </div>
            </div>
            <div className="col-lg-6">
              <div className="tradeup-content notimelimit-content notimelimit-content-right wow fadeInRight" data-wow-delay=".2s">
                <div className="section-title section-title-right">
                  <img src={img01} alt="" />
                  <h6 className="title">Support 24/7</h6>
                </div>
                <div className="section-title section-title-right">
                    <img src={img02} alt="" />
                    <h6 className="title">No Time Limits</h6>
                </div>
                <div className="section-title section-title-right">
                    <img src={img03} alt="" />
                    <h6 className="title">Right from Day One</h6>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NoTimeLimit;
