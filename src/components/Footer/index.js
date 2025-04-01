import React from "react";
import { Link } from "react-router-dom";

import bgImg from "../../assets/img/footer/bg-1-1.jpg";
import LogoWhite from "../../assets/img/logo/retina_logos.png";
import tollfree from "../../assets/img/footer/tollfree.png";
import payment from "../../assets/img/footer/payment.png";
const Footer = (props) => {
  const { footerClass, footerLogo, copyrightTextClass } = props;

  return (
    <footer>
      <div
        className={
          footerClass
            ? footerClass
            : "it-footer-area it-footer-bg black-bg pt-120 pb-70"
        }
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link to="/">
                    <img
                      src={footerLogo ? footerLogo : LogoWhite}
                      alt="Academy of Internal Audit Logo"
                    />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    Academy of Internal Audit is a premier institution dedicated
                    to providing world-class training and certification programs
                    for internal auditors and fraud examiners.
                  </p>
                </div>
                <div className="it-footer-social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-footer-widget footer-col-2">
                <h4 className="it-footer-title">Courses:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CFE
                        Curriculum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Become CFE
                        in Just 30 Days
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CIA
                        Curriculum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Become CIA
                        in Just 90 Days
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CIA
                        Challenge Curriculum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CIA
                        Challenge Prep Course
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CAMS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">Quick Links:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fa-regular fa-angle-right"></i>Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">
                        <i className="fa-regular fa-angle-right"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-angle-right"></i>Blog
                      </Link>
                    </li>
                    <li>
                      <Link tto="#">
                        <i className="fa-regular fa-angle-right"></i>Our Passout
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="fa-regular fa-angle-right"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <i className="fa-regular fa-angle-right"></i>Policies
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-angle-right"></i>Terms and
                        Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="it-footer-widget footer-col-4">
                <h4 className="it-footer-title">Contact Us</h4>
                <div className="it-footer-contact">
                  <p
                    style={{
                      marginBottom: "15px",
                      lineHeight: "1.6",
                      color: "white",
                    }}
                  >
                    <strong>ACADEMY OF INTERNAL AUDIT </strong>
                  </p>
                  <p
                    style={{
                      marginBottom: "15px",
                      lineHeight: "1.6",
                      fontSize:"15px",
                      color: "white",
                    }}
                  >
                    C-826, Vipul Plaza, Sector-81,
                    <br />
                    Faridabad, Delhi - NCR 121002,
                    <br />
                    India
                  </p>
                  <p
                    style={{
                      marginBottom: "15px",
                      lineHeight: "1.6",
                      fontSize:"15px",
                      color: "white",
                    }}
                  >
                    <a href="mailto:support@aia.in.net">support@aia.in.net</a> 
                    <br />
                    <a href="mailto:academyofia@gmail.com">academyofia@gmail.com</a>
                    
                  </p>
                  <p
                    style={{
                      marginBottom: "15px",
                      lineHeight: "1.6",
                      fontSize:"15px",
                      color: "white",
                    }}
                  >
                    <a href="tel:(+91)9311320114">+91 93113 20114</a>
                    <br />
                    <a href="tel:0129 417 4177">0129 417 4177</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="it-footer-payment mt-20"
            style={{
              marginBottom: "10px",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <h5 style={{ marginBottom: "10px", color: "orange" }}>
              Payment Modes Accepted
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div>
                <img
                  style={{
                    height: "80%",
                    width: "80%",
                  }}
                  src={payment}
                  alt="Payment Mode"
                />
              </div>
              <div>
                <img
                  style={{
                    height: "80%",
                    width: "80%",
                  }}
                  src={tollfree}
                  alt="Toll Free"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : "it-copyright-text text-center"
                }
              >
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <a href="#">AG Solutions </a> || All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
