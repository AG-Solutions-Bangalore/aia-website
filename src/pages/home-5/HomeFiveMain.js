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
import TextSlider from './TextSlider';
import MetaTitle from '../../components/MetaTitle/MetaTitle';

const HomeFiveMain = () => {
  return (
    <main>
    
            <MetaTitle
              title="Best Training Institute For Top Certification Courses- AIA"
              description="Academy of Internal Audit (AIA) is Online Training Institute for Global Certification Courses like CIA, CFE, and other International Certification Courses."
            />
      <Banner />
      <CTA />
      <Course />
      <Video />
      <TextSlider/>
      <About />
      <WhyChooseUs />
     <YoutubeChanel/>
     <Testimonial />
      {/* <Feature /> */}

    <AlumniWork/>
     
    
      
     
      {/* <FAQ /> */}
      {/* <Work /> */}
      <Blog />
    </main>
  );
};
export default HomeFiveMain;
