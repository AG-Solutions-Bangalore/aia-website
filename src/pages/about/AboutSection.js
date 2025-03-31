import React from "react";
import aboutImg from "../../assets/img/about/about_img.jpg";
import titleImg from "../../assets/img/about/title-home2.png";
import shapeImg1 from "../../assets/img/choose/shape-1-1.png";
import shapeImg2 from "../../assets/img/choose/shape-1-2.png";
import shapeImg3 from "../../assets/img/choose/shape-1-3.png";
import shapeImg4 from "../../assets/img/choose/shape-1-4.png";

const WhyChooseUs = () => {
  return (
    <div className="it-choose-area p-relative fix pt-180 pb-110">
      <div className="it-choose-shape-4 d-none d-md-block">
        <img src={shapeImg4} alt="" />
      </div>
      <div className="container ">
        <div className="row align-items-center g-lg-5 g-4">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-3-title-box">
              <span className="it-section-subtitle-3">
                <img src={titleImg} alt=""></img> about us
              </span>
              <h2 className="it-section-title-2 pb-30">
                ACADEMY OF INTERNAL AUDIT
                {/* <span>professional</span> */}
              </h2>
              <p>
                AIA is an online training institute to secure success in
                international certification courses. With the proven study
                material, we are committed towards success in professional
                courses for our students and help them grow in their
                professional journey.
              </p>
              <p>
                We are pleased to say that our faculty has always been our
                greatest strength who is always ready to assist students with
                his knowledge theoretically and practically. We help aspirants
                not only how to obtain international certifications, but also
                how to have them in the real sense so that they can demonstrate
                the same skills and competence in relevant areas as well.
              </p>
              <p>
                Since 15 years, AIA has been teaching commerce students under
                the name of Perfect Coaching Centre and now providing guidance
                for Top Certification Courses as well.{" "}
              </p>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 mb-30 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-choose-thumb-box text-center text-lg-end">
              <div className="it-choose-thumb p-relative">
                <img
                  src={aboutImg}
                  alt="CFE,CIA,CIA chalelenge - Academy of Internal Audit"
                />
                <div className="it-choose-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="it-choose-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="it-choose-shape-3 d-none d-lg-block">
                  <img src={shapeImg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
