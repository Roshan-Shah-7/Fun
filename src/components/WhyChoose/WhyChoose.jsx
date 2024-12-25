import React from "react";
import chartImg from "../../assets/img/images/chart.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const WhyChoose = () => {
  
  const data = [

    { account: "Account Size:",
      spark: "$1500",
      wave: "$3000",
      flow: "$5000",
      vibe: "$10000"
    },

    { account: "Leverage:",
      spark: "1:100",
      wave: "1:100",
      flow: "1:100",
      vibe: "1:100"
    },

    { 
      account: "Profit Target:",
      spark: "-",
      wave: "-",
      flow: "-",
      vibe: "-"
    },

    { 
      account: "Trading Days:",
      spark: "-",
      wave: "-",
      flow: "-",
      vibe: "-"
    },

    { 
      account: "Max Daily Drawdown:",
      spark: "2.5% (2x) 4% Single*",
      wave: "2.5% (2x) 4% Single*",
      flow: "2.5% (2x) 4% Single*",
      vibe: "2.5% (2x) 4% Single*"
    },

    { 
      account: "Max Drawdown:",
      spark: "8%",
      wave: "8%",
      flow: "8%",
      vibe: "8%"
    },

    { 
      account: "Payouts:",
      spark: "Daily",
      wave: "Daily",
      flow: "Daily",
      vibe: "Daily"
    },

    { 
      account: "Profit Split:",
      spark: "70/30",
      wave: "70/30",
      flow: "70/30",
      vibe: "70/30"
    },

    { 
      account: "Registration Fee",
      spark: "$80",
      wave: "$160",
      flow: "$300",
      vibe: "$600"
    },
]

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="chart-content wow fadeInLeft" data-wow-delay=".2s">
                <div className="section-title text-center mb-70">
                  <h2 className="title">
                    Why Choose FundedVibe
                  </h2>
                </div>
                {/* <ul className="nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Spark"
                    className="active"
                    id="Spark-tab"
                    target="#Spark"
                    ariaControls="Spark"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Wave"
                    className=""
                    id="Wave-tab"
                    target="#Wave"
                    ariaControls="Wave"
                    ariaSelected={false}
                  />

                  <SalesTabButton
                    title="Flow"
                    className=""
                    id="Flow-tab"
                    target="#Flow"
                    ariaControls="Flow"
                    ariaSelected={false}
                  />

                  <SalesTabButton
                    title="Vibe"
                    className=""
                    id="Vibe-tab"
                    target="#Vibe"
                    ariaControls="Vibe"
                    ariaSelected={false}
                  />
                </ul> */}

                <div className="tab-content" id="myTabContent">
                  <div className="programtable">
                      <table>
                          <tr>
                              <th></th>
                              <th>Spark</th>
                              <th>Wave</th>
                              <th>Flow</th>
                              <th>Vibe</th>
                          </tr>
                          {data.map((val, key) => {
                              return (
                                <tr key={key}>
                                    <td>{val.account}</td>
                                    <td>{val.spark}</td>
                                    <td>{val.wave}</td>
                                    <td>{val.flow}</td>
                                    <td>{val.vibe}</td>
                                </tr>
                              )
                          })}
                      </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
