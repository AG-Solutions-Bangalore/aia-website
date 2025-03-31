import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/footer/bg-1-1.jpg';
import LogoWhite from "../../assets/img/logo/retina_logos.png";


const Footer = (props) => {
  const { footerClass, footerLogo, copyrightTextClass } = props;

  return (
    <footer>
      <div
        className={
          footerClass
            ? footerClass
            : 'it-footer-area it-footer-bg black-bg pt-120 pb-70'
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
                    <img src={footerLogo ? footerLogo : LogoWhite} alt="Academy of Internal Audit Logo" />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    Academy of Internal Audit is a premier institution dedicated to 
                    providing world-class training and certification programs for 
                    internal auditors and fraud examiners.
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
                        <i className="fa-regular fa-angle-right"></i>CFE Curriculum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Become CFE in Just 30 Days
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CIA Curriculum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Become CIA in Just 90 Days
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CIA Challenge Curriculum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>CIA Challenge Prep Course
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
                      <Link to="/about">
                        <i className="fa-regular fa-angle-right"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fa-regular fa-angle-right"></i>Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/passout">
                        <i className="fa-regular fa-angle-right"></i>Our Passout
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="fa-regular fa-angle-right"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/policies">
                        <i className="fa-regular fa-angle-right"></i>Policies
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms">
                        <i className="fa-regular fa-angle-right"></i>Terms and Conditions
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
                  <p style={{ marginBottom: '15px', lineHeight: '1.6' ,color:"white"}}>
                    <strong>ACADEMY OF INTERNAL AUDIT</strong>
                  </p>
                  <p style={{ marginBottom: '15px', lineHeight: '1.6',color:"white" }}>
                    C-826, Vipul Plaza, Sector-81,<br />
                    Faridabad, Delhi - NCR 121002,<br />
                    India
                  </p>
                  <p style={{ marginBottom: '15px', lineHeight: '1.6',color:"white" }}>
                    <strong>Email:</strong> support@aia.in.net<br />
                    academyofia@gmail.com
                  </p>
                  <p style={{ marginBottom: '15px', lineHeight: '1.6',color:"white" }}>
                    <strong>Phone:</strong> +91 93113 20114<br />
                    0129 417 4177
                  </p>
                </div>
                <div className="it-footer-payment mt-20">
                  <h5 style={{ marginBottom: '10px',color:"orange" }}>Payment Modes Accepted</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <i className="fa-brands fa-cc-visa" style={{ fontSize: '30px', color: '#1a1f71' }}></i>
                    <i className="fa-brands fa-cc-mastercard" style={{ fontSize: '30px', color: '#eb001b' }}></i>
                    <i className="fa-brands fa-cc-amex" style={{ fontSize: '30px', color: '#016fd0' }}></i>
                    <i className="fa-brands fa-cc-paypal" style={{ fontSize: '30px', color: '#003087' }}></i>
                  </div>
                  <div className="mt-20" style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fa-solid fa-phone-volume" style={{ fontSize: '24px', color: '#fff', marginRight: '10px' }}></i>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' ,color:"orange"}}>Toll Free: 1800 1200-2555</span>
                  </div>
                </div>
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
                    : 'it-copyright-text text-center'
                }
              >
                <p>
                  Copyright &copy; {new Date().getFullYear()} <a href="#">Academy of Internal Audit</a> || All Rights
                  Reserved
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