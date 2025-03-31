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

const AboutMain = () => {
  return (
    <main>
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
