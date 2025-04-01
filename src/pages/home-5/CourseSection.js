import React from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleCourse from "../../components/Course";

import courseImg1 from "../../assets/img/course/course-5-1.jpg";
import courseImg2 from "../../assets/img/course/course-5-2.jpg";
import courseImg3 from "../../assets/img/course/course-5-3.jpg";
import SingleCourseWithList from "../../components/Course/SingleCourseWithList";

const Course = () => {
  return (
    <div
      id="it-course"
      className="it-course-area ed-course-bg ed-course-style-3 p-relative pt-120 pb-90"
    >
      <div className="container">
        <div className="ed-course-title-wrap mb-65">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <SectionTitle
                itemClass="it-course-title-box"
                subTitleClass="ed-section-subtitle"
                subTitle="Our Courses"
                titleClass="ed-section-title"
                title="Courses We Offer"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <SingleCourse
              courseImage={courseImg1}
              thumbText="Digital Marketing"
              title="Certified Fraud Examiner"
              description="CFE is a globally recognized certification in the field of fraud prevention, detection, and deterrence. By obtaining a CFE title you can explore growth in your career in the fields of audit, investigation, compliance, security etc."
              btnText="View Course"
            />
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleCourse
              courseImage={courseImg2}
              thumbText="Digital Marketing"
              title="Certified Internal Auditor(Three Part Exam)"
              description="A platform for Internal Audit professionals to accelerate their professional career. CIA is a three-level exam starting from fundamentals of internal audit and moves towards excellence in practice of Internal Auditing."
              btnText="View Course"
              titleStyle={{ fontSize: "21px" }}
            />
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCourse
              courseImage={courseImg3}
              thumbText="Digital Marketing"
              title="Certified Anti Money Laundering Specialist"
              description="A chance to become a Certified Internal Auditor by appearing in a single exam. Members from 18 qualified bodies are eligible for the challenge exam only. It includes content not covered in the curriculum of the qualified bodies exam."
              btnText="View Course"
            />
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCourse
              courseImage={courseImg3}
              thumbText="Digital Marketing"
              title="Certified Internal Auditor Challenge"
              description="CAMS is the global gold standard in AML certifications, with more than 40,000 CAMS graduates worldwide. CAMS is an established global qualification that outlines the key principles of money laundering, and how to prevent it."
              btnText="View Course"
            />
          </div>

          {/* second course  */}
          {/* Second row of courses */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCourseWithList
              title="AIA CFE Prep Course"
              listItems={[
                "60+ Hours of Video Lectures",
                "Practice Questions",
                "Live Doubt Taking Sessions",
                "Customized Study Notes",
              ]}
              btnText="View Course"
            />
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCourseWithList
              title="AIA CIA Prep Course"
              listItems={[
                "70+ Hours of Recorded Video Lectures",
                "Gleim Practice Questions",
                "Gleim Mock Test",
                "Experienced & CIA Qualified Faculty",
              ]}
              btnText="View Course"
            />
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCourseWithList
              title="AIA CIA Challenge Prep Course"
              listItems={[
                "50+ Hours of Recorded Video Lectures",
                "2200+ Practice Questions",
                "Online Live Revision Classes",
                "Classes Exam Oriented Study Material",
              ]}
              btnText="View Course"
            />
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCourseWithList
              title="AIA CAMS Prep Course"
              listItems={[
                "30+ Hours of Recorded/Live Video Lecture",
                "700+ Practice Questions",
                "Exam Oriented Study Material",
                "CAMS Mock Test",
              ]}
              btnText="View Course"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
