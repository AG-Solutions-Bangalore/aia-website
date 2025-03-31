import React from "react";
import aboutImg from "../../assets/img/about/about_faculty.jpg";
import testimonialBG from "../../assets/img/testimonial/testimonial-bg.jpg";

const AboutFaculty = () => {
  return (
    <div
      id="it-about"
      className="it-about-3-area fix pt-120 pb-60 p-relative  "
      style={{ backgroundImage: `url(${testimonialBG})` }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          {/* Image Section */}
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="ed-about-2-left p-relative">
              <img
                src={aboutImg}
                alt="Puneet Garg - Academy of Internal Audit"
                className="img-fluid rounded-circle"
              />
              {/* Name & Credentials Below Image */}
              <h2 className="mt-3 fw-bold">Puneet Garg</h2>
              <h5 className="fw-semibold ">CA, CS, CIA, CFE, CAMS</h5>
            </div>
          </div>

          {/* Content Section */}
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-3-title-box mt-4 text-start">
              <p>
                Puneet Garg is a qualified Chartered Accountant (CA), Company
                Secretary (CS), Certified Internal Auditor (CIA), Certified
                Fraud Examiner (CFE), and Certified Anti Money Laundering
                Specialist (CAMS) with more than 18 years of experience in
                diverse areas of Internal Audit, Compliance, Risk Management,
                Forensics, and Finance.
              </p>
              <p>
                He has been associated with Alchemist Group of companies,
                Hyundai Motors, Samsung Electronics India, Panasonic India, and
                DCM Shriram Industries. He has in-depth experience performing
                internal audit assignments and conducting fraud examinations as
                a team member and leader. Puneet has led various assignments
                across the globe, including Dubai, Saudi Arabia, and the UK.
              </p>
              <p>
                Apart from a successful corporate career, he has taught
                thousands of aspirants academically and helped them enrich their
                skills in the field of audit and fraud examination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFaculty;
