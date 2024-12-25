import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <Link to={props.link} className="btn">Get a Plan</Link>
        <p>{props.description}* 2.5% max daily drawdown limit for up to 2 days. 4% max daily drawdown limit for a single day.</p>
      </div>
    </div>
  );
};

export default SalesTabContent;
