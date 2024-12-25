import React from "react";
import img01 from "../../assets/img/icon/icon01.png";
import img02 from "../../assets/img/icon/icon02.png";
import img03 from "../../assets/img/icon/icon03.png";
import img04 from "../../assets/img/icon/icon04.png";
import img05 from "../../assets/img/icon/icon05.png";
import img06 from "../../assets/img/icon/icon06.png";
import { Link } from "react-router-dom";

const TradeUpTo = (props) => {
  return (
    <section id="tradeup" className="tradeup-area pt-130 pb-130">
      <div className="container">
          <div className="section-title text-center section-title-two mb-15">
            <h2 className="title">
              No Simulations, No Gimmicks, Just Real Trading.
            </h2>
            <p className="heading-title">Power up your trading success with FunedVibe & get maximum profit form day One.</p>
          </div>
        <div className="row align-items-center text-center">
          <div className="col-lg-4">
            <div className="tradeup-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title">
                <img src={img01} alt="" />
                <h4 className="title">70/30% Profit Share from Day One</h4>
                <p>The only trading prop firm that offers no challenges and funding from day one.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tradeup-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title">
                <img src={img02} alt="" />
                <h4 className="title">
                  100% real account. Not Demos.
                </h4>
                <p>Trade with 100% real accounts, not demos. Experience genuine trading from day one.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tradeup-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title">
                <img src={img03} alt="" />
                <h4 className="title">
                  No hidden costs. No Clickbait.
                </h4>
                <p>No hidden costs, no clickbait—just transparent and pure trading.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tradeup-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title">
                <img src={img04} alt="" />
                <h4 className="title">
                  Get Paid in 24 hours
                </h4>
                <p>Get paid within 24 hours, or we’ll pay you $1,000 extra.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tradeup-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title">
                <img src={img05} alt="" />
                <h4 className="title">
                  Reset & Top-up
                </h4>
                <p>Reset or top-up your account to restart your trading journey, even if you've violated any rules.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tradeup-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title">
                <img src={img06} alt="" />
                <h4 className="title">
                  Monthly Competition
                </h4>
                <p>FunedVibe hosts free monthly competitions where you can compete for exclusive rewards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeUpTo;
