import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/img/blog/blog-1-7.jpg';
import RightArrow from '../SVG';

const SingleBlogTwo = (props) => {
  const {
    itemClass,
    blogImage,
    blogAlt,
    authorName,
    publishedDate,
    title,
    description,
    btnClass,
    btnText,
    hasArrow,
  } = props;
  return (
    <div className={itemClass ? itemClass : 'it-blog-item'}>
      <div className="it-blog-thumb mb-0 fix">
        <Link to="/blog-details">
          <img style={{
            height: '15rem',
          }} src={blogImage ? blogImage : Image} alt={blogAlt || ''} />
        </Link>
      </div>
      <div className="it-blog-content">
        <div className="it-blog-meta pb-2">
      
          <span>
            <i className="fa-light fa-calendar-days"></i>
            {publishedDate ? publishedDate : 'March 28, 2023'}
          </span>
        </div>
        <h4 style={{
          fontSize: '18px',
        }} className="it-blog-title pb-0">
          <Link to="/blog-details">
            {title
              ? title
              : 'Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.'}
          </Link>
        </h4>
        {description && (
          <p style={{
            height: '10rem',
          }} className="it-blog-description pb-15">
            {description.length > 150 
              ? `${description.substring(0, 150)}...` 
              : description}
          </p>
        )}
        <Link
          className={btnClass ? btnClass : 'ed-btn-square purple-3'}
          to="/blog-details"
        >
          <span>
            {btnText ? btnText : 'read more'} {hasArrow && <RightArrow />}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogTwo;