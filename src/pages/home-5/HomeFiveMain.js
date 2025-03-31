import React from 'react';
import About from './AboutSection';
import Blog from './BlogSection';
import Course from './CourseSection';
import CTA from './CTASection';
import FAQ from './FaqSection';
import Feature from './FeatureSection';
import Banner from './HomeFiveBanner';
import Testimonial from './TestimonialSection';
import Video from './VideoSection';
import WhyChooseUs from './WhyChooseUsSection';
import Work from './WorkSection';
import YoutubeChanel from './YoutubeChanel';
import AlumniWork from './AlumniWork';

const HomeFiveMain = () => {
  return (
    <main>
      <Banner />
      <CTA />
      <Course />
      <About />
      <WhyChooseUs />
     <YoutubeChanel/>
     <Testimonial />
      {/* <Feature /> */}

    <AlumniWork/>
     
    
      
      {/* <Video /> */}
      {/* <FAQ /> */}
      {/* <Work /> */}
      <Blog />
    </main>
  );
};
export default HomeFiveMain;
