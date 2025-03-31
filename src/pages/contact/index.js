import React from "react";
import HeaderFive from "../../components/Header/HeaderFive";
import ContactMain from "./ContactMain";

import Footer from "../../components/Footer";
import MetaTitle from "../../components/MetaTitle/MetaTitle";

const Contact = () => {
  return (
    <>
      <MetaTitle
        title="Contact Us | Academy of Internal Audit"
        description="Reach out to Academy of Internal Audit for dedicated support in your journey to obtain professional course certifications. We will be happy to help you."
      />
      <HeaderFive />
      <ContactMain />
      {/* <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-5 inner-style black-bg pb-70"
        footerLogo={Logo}
        btnClass="it-btn-white sky-bg"
        copyrightTextClass="it-copyright-text inner-style text-center"
      /> */}
      <Footer />
    </>
  );
};

export default Contact;
