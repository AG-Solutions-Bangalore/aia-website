import React from 'react';
import Footer from '../../components/Footer';
import HomeFiveMain from './HomeFiveMain';
import HeaderFive from '../../components/Header/HeaderFive';
import LogoWhite from "../../assets/img/logo/retina_logos.png";
import Logo from '../../assets/img/logo/logo-white-2.png';

const HomeFive = () => {
  return (
    <>
      <HeaderFive />

      <HomeFiveMain />

      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        footerLogo={LogoWhite}
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};
export default HomeFive;
