import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/banner_shape02.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";
import shape04 from "../../assets/img/banner/banner_shape04.png";
import CountDownOne from "../CountDown/CountDownOne";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
        <img src={shape04} alt="" className="img-four" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="banner-content text-left">
              <h2 className="title">
                Instant funding No need to prove your skill.
              </h2>
              <p>At FundedVibe, we redefine trading by offering a transparent and authentic funded program that empowers traders to succeed with 100% real accounts not demos. Whether you're an experienced trader or just starting out, our program is designed to help you take your trading journey to the next level.</p>
              <div className="btn">Start Challenge</div>
              <div className="btn free-trail">Free Trail</div>
            </div>
            {/* <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div> */}
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">Count Down Start In..</h2>

              <CountDownOne />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
