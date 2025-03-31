import React from "react";
import aboutImg from "../../assets/img/about/vision.png";
import aboutImg1 from "../../assets/img/about/vision_1.jpg";

const OurVision = () => {
  return (
    <div id="it-mission" className="it-about-3-area fix pt-60 pb-60 p-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div
            className="col-xl-6 col-lg-6 order-2 order-lg-1 wow animate__fadeInRight text-center"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <img
              src={aboutImg1}
              alt="Image of our vision academy of Internal Audit"
              className="img-fluid"
            />
          </div>

          {/* Content Section */}
          <div
            className="col-xl-6 col-lg-6 order-1 order-lg-2 wow animate__fadeInLeft text-start"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-mission-content">
              {/* Icon Above Title */}
              <div className="icon text-primary mb-3">
                <img
                  src={aboutImg}
                  alt="Our Vision - Academy of Internal Audit"
                  className="img-fluid rounded"
                />
              </div>

              {/* Title */}
              <h2 className="fw-bold">Our Vision</h2>

              {/* Mission Statement */}
              <p style={{ fontSize: "16px", textAlign: "justify" }}>
                Our Vision is to make all concerned professionals : learn the
                right skills, grow in their career across the globe and
                demonstrate their professional excellence in true spirits while
                staying updated to the emerging risks and controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
