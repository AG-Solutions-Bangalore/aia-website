import React from 'react';

import Avatar from '../../assets/img/testimonial/avatar-1-1.png';

const SingleTestimonialThree = (props) => {
  const { itemClass, description, authorAvatar, authorName, designation ,altText} =
    props;

  return (
    <div  className={itemClass ? itemClass : 'ed-testimonial-item p-relative'}>
      {/* <div className="ed-testimonial-ratting">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div> */}
      <div style={{height:"22rem", }}  className="ed-testimonial-text">
        <p style={{fontSize:"15px"}}>
          {description
            ? description
            : ` “description”`}
        </p>
      </div>
      <div  className="ed-testimonial-author-box d-flex align-items-center">
        <div className="ed-testimonial-author mr-15">
          <img  style={{height:"3rem", width:"3rem"}} src={authorAvatar ? authorAvatar : Avatar} alt={altText} />
        </div>
        <div>
          <h5>{authorName ? authorName : 'Ellen Perera'}</h5>
          <span>{designation ? designation : 'CEO at House of Ramen'}</span>
        </div>
      </div>
    </div>
  );
};
export default SingleTestimonialThree;
