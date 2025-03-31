import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../components/SVG";

import aboutImg from "../../assets/img/about/about_img.jpg";
import aboutImg1 from "../../assets/img/about/ed-about-2-1.png";
import aboutImg2 from "../../assets/img/about/ed-about-2-3.png";
import aboutImg3 from "../../assets/img/about/ed-about-2-2.png";
import shapeImg1 from "../../assets/img/about/ed-shape-2-1.png";
import shapeImg2 from "../../assets/img/about/ed-shape-2-2.png";
import titleImg from "../../assets/img/about/title-home2.png";

const About = () => {
  return (
    // <div id="it-about" className="it-about-3-area fix pt-120 pb-120 p-relative">
    <div id="it-about" className="it-about-3-area fix pt-120 pb-60 p-relative">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="ed-about-2-left p-relative text-end">
              <div className="ed-about-2-left-box d-inline-flex align-items-end">
                {/* <div className="ed-about-2-thumb-one pb-110 mr-20"> */}
                <div className="ed-about-2-thumb-one  mr-20">
                  {/* <img
                    src={aboutImg1}
                    alt="CFE,CIA,CIA chalelenge - Academy of Internal Audit"
                  /> */}
                </div>
                <div className="ed-about-2-thumb-two text-start">
                  {/* <img className="mb-20 inner-top-img" src={aboutImg2} alt="" /> */}
                  {/* <img
                    src={aboutImg3}
                    alt="CFE,CIA,CIA chalelenge - Academy of Internal Audit"
                  /> */}
                  <img
                    src={aboutImg}
                    alt="CFE,CIA,CIA chalelenge - Academy of Internal Audit"
                  />
                </div>
              </div>
              <div className="ed-about-2-thumb-shape-1 d-none lg-block">
                <img src={shapeImg1} alt="" />
              </div>
              <div className="ed-about-2-thumb-shape-2 d-none d-xxl-block">
                <img src={shapeImg2} alt="" />
              </div>
            </div>
          </div>
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
            {/* <div className="it-about-3-mv-box">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">OUR MISSION:</span>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">OUR VISSION:</span>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="it-about-3-btn-box p-relative">
              <Link className="ed-btn-theme theme-2" to="/about-us">
                Admission open
                <i>
                  <RightArrow />
                </i>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
