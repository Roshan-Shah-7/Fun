import React from "react";
import img01 from "../../assets/img/partner/payment-1.webp";
import img02 from "../../assets/img/partner/payment-2.webp";
import img03 from "../../assets/img/partner/payment-3.webp";
import img04 from "../../assets/img/partner/payment-4.webp";
import img05 from "../../assets/img/partner/payment-2.webp";
import img06 from "../../assets/img/partner/payment-6.webp";
import img07 from "../../assets/img/partner/payment-7.webp";
import img08 from "../../assets/img/partner/payment-5.webp";
import img09 from "../../assets/img/partner/payment-3.webp";
import img10 from "../../assets/img/partner/payment-1.webp";

const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "" },
    { src: img02, title: "" },
    { src: img03, title: "" },
    { src: img04, title: "" },
    { src: img05, title: "" },
    { src: img06, title: "" },
    { src: img07, title: "" },
    { src: img08, title: "" },
    { src: img09, title: "" },
    { src: img10, title: "" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              {/* <span className="sub-title">Available Payment Methods</span> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;
