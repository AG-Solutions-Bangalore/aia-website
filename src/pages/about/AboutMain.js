import React from "react";
// import Breadcrumb from '../../components/Breadcrumb';
import About from "./AboutSection";
import FunFact from "./FunFactSection";
import AboutFaculity from "./AboutFaculity";
import AboutBreadcrumb from "../../components/Breadcrumb/aboutindex";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

import Course from "./CourseSection";
// import FunFact from './FunFactSection';
import Team from "./TeamSection";
import Testimonial from "./TestimonialSection";
import { Helmet } from "react-helmet-async";
import MetaTitle from "../../components/MetaTitle/MetaTitle";

const AboutMain = () => {
  return (
    <main>
      <MetaTitle
        title="About - Academy of Internal Audit"
        description="Academy of Internal Audit is a well-known Training Institute for Professional Courses Training, skilled faculty, and comprehensive guidance services."
      />
      <AboutBreadcrumb title="Who We Are" />
      <div className="p-2">
        <About />
        <FunFact />
        <AboutFaculity />
        <OurMission />
        <OurVision />
      </div>
      {/* <Testimonial />
      <Course />
      <Team /> */}
    </main>
  );
};
export default AboutMain;
