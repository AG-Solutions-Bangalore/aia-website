import React from "react";
import aboutImg from "../../assets/img/about/mission.png";
import aboutImg1 from "../../assets/img/about/mission_1.jpg";

const OurMission = () => {
  return (
    <div
      id="it-mission"
      className="it-about-3-area fix pt-60 pb-60 p-relative"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Content Section */}
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft text-start"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-mission-content">
              {/* Icon Above Title */}
              <div className="icon text-primary mb-3">
                <img
                  src={aboutImg}
                  alt="Image of our mission academy of Internal Audit"
                  className="img-fluid rounded"
                />{" "}
              </div>

              {/* Title */}
              <h2 className="fw-bold">Our Mission</h2>

              {/* Mission Statement */}
              <p>
                Our Mission is to provide the best training, study material, and
                complete guidance related to Global Certifications to the
                aspirants at the lowest possible cost. We aim to ensure that
                corporations have a right set of internal auditors and fraud
                examiners to safeguard their efforts and wealth.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight text-center"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <img
              src={aboutImg1}
              alt="Our Mission -  Academy of Internal Audit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
