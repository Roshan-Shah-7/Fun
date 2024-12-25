import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Step 1",
      title: "Create",
      info: [
        "Create a Personal Account",
      ],
    },
    {
      roadmapTitle: "Step 2",
      title: "Choose",
      info: [
        "Selecting and purchasing a programme",
      ],
    },

    {
      roadmapTitle: "Step 3",
      title: "Funded Account",
      info: [
        "Obtaining a funded account",
      ],
    },
    {
      roadmapTitle: "Step 4",
      title: "Trading",
      info: [
        "Trading on a live funded account",
      ],
    },
    {
      roadmapTitle: "Step 5",
      title: "Profit",
      info: [
        "Making a profit",
      ],
    },
    {
      roadmapTitle: "Step 6",
      title: "Distribution",
      info: [
        "Distribution of profits",
      ],
    },
    {
      roadmapTitle: "Step 7",
      title: "Withdrawal",
      info: [
        "Withdrawal of earned money",
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <h2 className="title">
                Fundedvibe Strategy and Product Plan
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
