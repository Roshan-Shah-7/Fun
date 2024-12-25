import React from "react";
import shape01 from "../../assets/img/images/faq_shape01.png";
import shape02 from "../../assets/img/images/faq_shape02.png";
import shape03 from "../../assets/img/images/faq_shape03.png";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faq_items = [
    {
      id: "headingOne",
      controls: "collapseOne",
      expanded: true,
      btnClass: "",
      contentClass: "show",
      title: "Are the accounts provided real accounts with real money?",
      details: `Yes, all accounts are 100% real and funded with actual money.`,
    },
    {
      id: "headingTwo",
      controls: "collapseTwo",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Why is the maximum account size limited to $10,000?",
      details: `We believe a $10,000 account is sufficient for traders who follow disciplined and skillful trading practices. This approach is more beneficial than offering a million-dollar demo account.`,
    },
    {
      id: "headingThree",
      controls: "collapseThree",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Can I open multiple accounts?",
      details: `Yes, you can open up to 10 accounts under a single ID.`,
    },
    {
      id: "headingFour",
      controls: "collapseFour",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Do you guarantee payouts within 24 hours as advertised?",
      details: `Yes, we make every effort to process payouts within 24 hours. If we fail to do so, we will pay you an additional $1,000 as compensation.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Are there profit targets that traders need to achieve?",
      details: `No, there are no profit targets. You are free to trade at your own pace.`,
    },
    {
      id: "headingSix",
      controls: "headingSix",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "What is the minimum withdrawal limit?",
      details: `You can withdraw your profit once it reaches a minimum of $25.`,
    },
    {
      id: "headingSeven",
      controls: "headingSeven",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is copy trading allowed?",
      details: `No, copy trading is not allowed. Our focus is on helping individual traders enhance their skills rather than relying on bots or copying strategies.`,
    },
    {
      id: "headingEight",
      controls: "headingEight",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is hedging allowed?",
      details: `No, hedging is strictly prohibited under our trading rules`,
    },
    {
      id: "headingNine",
      controls: "headingNine",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Can I use an expert advisor (EA) to trade?",
      details: `No, we do not permit the use of expert advisors. Our goal is to support traders in developing their personal skills and strategies.`,
    },
    {
      id: "headingTen",
      controls: "headingTen",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Are there any specific trading rules?",
      details: `Yes, we have a set of straightforward trading rules detailed in our trading guidelines. There are no additional rules outside of those specified.`,
    },
  ];

  return (
    <section id="faq" className="faq-area">
      <div className="container custom-container-four">
        <div className="faq-shape-wrap">
          <img src={shape01} alt="" className="img-one" />
          {/* <img src={shape02} alt="" className="img-two rotateme" /> */}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="section-title section-title-two text-center mb-60">
              <h2 className="title">Frequently asked questions</h2>
            </div>

            <div className="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion" id="accordionExample">
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
