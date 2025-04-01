import React from 'react';
import { Link } from 'react-router-dom';
import shapeImg from '../../assets/img/course/ed-item-shape.png';
import RightArrowThin from '../SVG/RightArrowThin';

const SingleCourseWithList = (props) => {
  const {
    itemClass,
    title,
    listItems = [], 
    btnText = 'View Course',
    titleStyle = {},
    contentStyle = {}
  } = props;

  return (
    <div 
      className={itemClass ? itemClass : 'it-course-item ed-course-style-2'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div 
        className="it-course-content p-relative"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '0px',
          boxSizing: 'border-box'
        }}
      >
        {/* Title */}
        <h4 
          className="it-course-title pb-15"
          style={{
            margin: '0 0 1rem 0',
            flexShrink: 0,
            ...titleStyle
          }}
        >
          <Link to="#">{title}</Link>
        </h4>
        
        {/* Description with Bullet Points */}
        <div 
          className="it-course-info pb-15 mb-30"
          style={{
            flex: 1,
            marginBottom: '1rem',
            fontSize:"14px",
            overflow: 'hidden',
            ...contentStyle
          }}
        >
          <ul style={{
            paddingLeft: '1rem',
            margin: 0,
            listStyleType: 'disc'
          }}>
            {listItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Button */}
        <div style={{ marginTop: 'auto', flexShrink: 0 }}>
          <div className="ed-course-price-box">
            <Link className="ed-course-btn" to="#">
              {btnText}
              <RightArrowThin />
            </Link>
          </div>
        </div>
        
        <div className="ed-course-shape">
          <img src={shapeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleCourseWithList;