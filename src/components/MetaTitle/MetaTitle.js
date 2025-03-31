import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTitle = ({ title, description }) => {
  return (
    // <Helmet>
    //   <title>
    //     {title}
    //     {description}
    //   </title>
    // </Helmet>
    <Helmet>
      <title> {title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="ACADEMY OF INTERNAL AUDIT"></meta>
    </Helmet>
  );
};

export default MetaTitle;
