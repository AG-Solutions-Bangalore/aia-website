import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import RightArrow from '../../components/SVG';

import shapeImg1 from '../../assets/img/about/ed-shape-2.png';
import shapeImg2 from '../../assets/img/about/ed-shape-1.png';
import aboutImg1 from '../../assets/img/about/home_about.jpg';
import aboutImg2 from '../../assets/img/about/ed-5-2.jpg';

const About = () => {
  return (
    <div id="it-about" className="it-about-5-area p-relative fix pt-60 pb-120">
      <div className="ed-about-5-shape-2">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-5-right">
              <SectionTitle
                itemClass="it-about-5-title-box pb-10 section-title-fixed-width-2"
                subTitleClass="ed-section-subtitle"
                subTitle="our about us"
                titleClass="it-section-title-5"
                title="ACADEMY OF INTERNAL AUDIT"
              />
              <div className="it-about-5-text mb-30">
                <p>
                  
                AIA is an online training institute to secure success in international certification courses. With the proven study material, we are committed towards success in professional courses for our students and help them grow in their professional journey.
                                                        <br /> 
                                                        We are pleased to say that our faculty has always been our greatest strength who is always ready to assist students with his knowledge theoretically and practically. We help aspirants not only how to obtain international certifications, but also how to have them in the real sense so that they can demonstrate the same skills and competence in relevant areas as well.
                                                        <br /> 
                                                        Since 15 years, AIA has been teaching commerce students under the name of Perfect Coaching Centre and now providing guidance for Top Certification Courses as well.
                                                    
                </p>
              </div>
              <div className="ed-about-5-content">
                <div className="it-about-5-list mb-10">
                  <ul>
                    <li>
                      <i className="fa-regular fa-check"></i>Best Teaching
                    </li>
                    <li>
                      <i className="fa-regular fa-check"></i>Quality Educators
                    </li>
                  </ul>
                </div>
                <div className="it-about-5-list mb-40">
                  <ul>
                    <li>
                      <i className="fa-regular fa-check"></i>Expert Tutor
                    </li>
                    <li>
                      <i className="fa-regular fa-check"></i>Affordable
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-feature-button">
                <Link
                  className="ed-btn-square orange"
                  to="/student-registration"
                >
                  Read More
                  <i>
                    <RightArrow />
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ed-about-5-right d-flex justify-content-between p-relative">
              <div className="ed-about-5-thumb-2">
                <img src={aboutImg1} alt="" />
              </div>
              <div className="ed-about-5-thumb-1">
                {/* <img src={aboutImg2} alt="" /> */}
              </div>
              <div className="ed-about-5-shape-1">
                <img src={shapeImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
