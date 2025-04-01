import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

import { Helmet } from "react-helmet-async";
import shapeImg from "../../assets/img/contact/shape-2-1.png";
import toolFree from "../../assets/img/contact/toll-free.png";
import Toast from "../../components/Toast/Toast";
import BaseUrl from "../../utils/BaseUrl";
import styles from "./ContactMain.module.css";
const ContactMain = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMobile: "",
    userMessage: "",
    userType: "Contact",
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userMobile" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.userName ||
      !formData.userEmail ||
      !formData.userMobile ||
      !formData.userMessage
    ) {
      showToast("Fill all the required fields.", "error");
      return;
    }
    try {
      const response = await fetch(`${BaseUrl}/api/web-create-webenquir`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast("Message sent successfully!", "success");
      } else {
      }
    } catch (error) {
      showToast("Failed to send message. Please try again.", "error");

      console.error("Error:", error);
    }
  };

  return (
    <main>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}

      <Breadcrumb title="Contact Us" />
      <Helmet>
        <title>Contact - Academy of Internal Audit</title>
      </Helmet>
      <div className="it-contact__area pt-60 pb-120">
        <div className="container">
          <h4 className={styles["it-contact__titles"]}>
            {" "}
            Best Academy for Global Certifications related to Audit, Anti Money
            Laundering & Anti Fraud Education.
          </h4>
          <div className="it-contact__wrap fix z-index-3 p-relative">
            <div className="it-contact__shape-1 d-none d-xl-block">
              <img src={shapeImg} alt="" />
            </div>
            <h4 className={styles["it-contact__titles"]}>
              One stop solution for CFE,CIA,CIA Challenge & CAMS
            </h4>
            <div className="row align-items-end">
              <div className="col-xl-7">
                <div className="it-contact__right-box">
                  <div className="it-contact__section-box pb-20"></div>
                  <div className="it-contact__content mb-55">
                    <ul>
                      <li>
                        <div className="it-contact__list d-flex align-items-start">
                          <div className="it-contact__icon">
                            <span>
                              <i className="fa-solid fa-location-dot"></i>
                            </span>
                          </div>
                          <div className="it-contact__text">
                            <span>Office</span>
                            <a target="_blank">
                              ACADEMY OF INTERNAL AUDIT
                              <span
                                className="text-[16px]"
                                style={{ fontSize: "16px", fontWeight: "bold" }}
                              >
                                <br />
                                C-826, Vipul Plaza, Sector-81,
                                <br />
                                Faridabad, <br />
                                Delhi - NCR 121002,
                                <br />
                                India
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="it-contact__list d-flex align-items-start">
                          <div className="it-contact__icon">
                            <span>
                              <i className="fa-solid fa-envelope"></i>
                            </span>
                          </div>

                          <div className="it-contact__text">
                            <span style={{ display: "block" }}>Email Us</span>
                            <a href="mailto:support@aia.in.net">
                              support@aia.in.net
                            </a>
                            <a href="mailto:academyofia@gmail.com">
                              academyofia@gmail.com
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="it-contact__list d-flex align-items-start">
                          <div className="it-contact__icon">
                            <span>
                              <i className="fa-solid fa-phone phone"></i>
                            </span>
                          </div>
                          <div className="it-contact__text">
                            <span style={{ display: "block" }}>contact</span>
                            <a
                              href="tel:+9311320114"
                              style={{ display: "block" }}
                            >
                              +91 9311320114
                            </a>
                            <a
                              href="tel:+01294174177"
                              style={{ display: "block" }}
                            >
                              0129 417 4177
                            </a>
                            <a href="tel:+180012002555">
                              <img
                                src={toolFree}
                                alt="Toll free number"
                                className="w-5"
                                style={{ height: "35px" }}
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
                    <div className="it-footer-social">
                      <a
                        href="https://www.facebook.com/@academyofinternalaudit"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/academyofia/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="https://in.pinterest.com/academyofia/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                      <a href="https://x.com/AcademyAudit" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@academyofia"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube text-red-600"></i>
                      </a>

                      <a
                        href="https://www.instagram.com/academyofia/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram text-pink-500"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="it-contact__form-box">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 mb-25">
                        <div className="it-contact-input-box">
                          <label>Name*</label>
                          <input
                            type="text"
                            placeholder="Name"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-25">
                        <div className="it-contact-input-box">
                          <label>Phone*</label>
                          <input
                            type="text"
                            placeholder="Phone"
                            onChange={handleChange}
                            name="userMobile"
                            value={formData.userMobile}
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-25">
                        <div className="it-contact-input-box">
                          <label>Email Address*</label>
                          <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name="userEmail"
                            value={formData.userEmail}
                          />
                        </div>
                      </div>

                      <div className="col-12 mb-25">
                        <div className="it-contact-textarea-box">
                          <label>Message</label>
                          <textarea
                            placeholder="Message"
                            onChange={handleChange}
                            name="userMessage"
                            value={formData.userMessage}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="ed-course-btn"
                    >
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-120">
        <div className="ratio ratio-16x9">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Academy of Internal Audit, SRS City, Sector 87, Faridabad, Haryana 121002&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default ContactMain;
