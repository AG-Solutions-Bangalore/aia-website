import React from "react";
import Counter from "../../components/Counter";

import funFactBG from "../../assets/img/funfact/funfact-bg.png";

const FunFact = () => {
  const counters = [
    {
      countIcon: "flaticon-teacher",
      countNum: 1000,
      countSubtext: "+",
      countTitle: "Student Trained",
    },
    {
      countIcon: "flaticon-completed-task",
      countNum: 99,
      countSubtext: "%",
      countTitle: "Postive Result",
    },
    {
      countIcon: "flaticon-customer-review",
      countNum: 18,
      countSubtext: "+",
      countTitle: "Faculty Experience",
    },
    // {
    //   countIcon: "flaticon-class",
    //   countNum: 102,
    //   countSubtext: "K+",
    //   countTitle: "Students Community",
    // },
  ];
  return (
    <div className="it-funfact-area z-index-5  pb-60">
      <div className="container">
        <div
          className="it-funfact-bg-wrap orange-bg"
          style={{ backgroundImage: `url(${funFactBG})` }}
        >
          <div className="row gx-0 justify-content-center text-center">
            <h2 className="py-3 text-center fw-bold display-6 display-md-5 display-lg-4">
              Numbers speak louder than words !!
            </h2>

            {counters.map((counter, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center"
              >
                <div className="it-funfact-item d-flex align-items-center">
                  <div className="it-funfact-icon">
                    <span>
                      <i className={counter.countIcon}></i>
                    </span>
                  </div>
                  <div className="it-funfact-content">
                    <h6>
                      <Counter
                        start={0}
                        end={counter.countNum}
                        duration={5}
                        counterSubText={counter.countSubtext}
                      />
                    </h6>
                    <span className="it-funfact-content-title">
                      {counter.countTitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFact;
