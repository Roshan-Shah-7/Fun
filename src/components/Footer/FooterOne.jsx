import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/logo02.png";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link to="/" className="f-logo">
                    <img src={logoImage} alt="BigTech Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      At FundedVibe, we redefine trading by offering a transparent 
                      and authentic funded program that empowers traders to succeed 
                      with 100% real accounts not demos.
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-tiktok"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Useful Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/About">About</Link>
                      </li>
                      <li>
                        <Link to="/">Product</Link>
                      </li>
                      <li>
                        <Link to="/Rules">Trading Rules</Link>
                      </li>
                      <li>
                        <Link to="/">Add-Ons</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Community</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Help Center</Link>
                      </li>
                      <li>
                        <Link to="/">Partners</Link>
                      </li>
                      <li>
                        <Link to="/">Profit Payout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Empowering Financial Growth
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Info@gmail.com"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2024. All Rights Reserved FundedVibe</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                  <li>
                      <Link to="/TermsConditions">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/RiskDisclosure">Risk Disclosure</Link>
                    </li>
                    <li>
                      <Link to="/Disclaimer">Disclaimer</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
