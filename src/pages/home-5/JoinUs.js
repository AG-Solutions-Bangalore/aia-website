import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from 'react-icons/fa';
import JoinUsImage from '../../assets/img/joinus/join_us.png';

const JoinUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      style={{
        display: 'none',
        position: 'fixed',
        left: '2rem',
        bottom: '8rem',
        zIndex: '50',
        width: '60px',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        position: 'relative',
        width: '100%'
      }}>
        {/* Social media links container - positioned ABOVE the button */}
        <div style={{
          position: 'absolute',
          bottom: '70px',
          left: '0',
          width: '60px',
          backgroundColor: 'inherit',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          padding: '10px 0',
          gap: '10px'
        }}  target='_blank' rel="noreferrer">
          <a href="https://www.facebook.com/@academyofinternalaudit" style={{ 
            color: 'white', 
            fontSize: '20px',
            backgroundColor: '#fa8017',
            border: '2px solid orange',
            borderRadius: '50%',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px'
          }}  target='_blank' rel="noreferrer">
            <FaFacebookF style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="https://x.com/AcademyAudit" style={{ 
            color: 'white', 
            fontSize: '20px',
            backgroundColor: '#fa8017',
            border: '2px solid orange',
            borderRadius: '50%',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px'
          }}  target='_blank' rel="noreferrer">
            <FaTwitter style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="https://www.instagram.com/academyofia/" style={{ 
            color: 'white', 
            fontSize: '20px',
            backgroundColor: '#fa8017',
            border: '2px solid orange',
            borderRadius: '50%',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        width: '50px',
            height: '50px'
          }}  target='_blank' rel="noreferrer">
            <FaInstagram style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="https://www.linkedin.com/company/academy-of-internal-audit" style={{ 
            color: 'white', 
            fontSize: '20px',
            backgroundColor: '#fa8017',
            border: '2px solid orange',
            borderRadius: '50%',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px'
          }}  target='_blank' rel="noreferrer">
            <FaLinkedinIn style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="https://www.youtube.com/@academyofia" style={{ 
            color: 'white', 
            fontSize: '20px',
            backgroundColor: '#fa8017',
            border: '2px solid orange',
            borderRadius: '50%',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          width: '50px',
            height: '50px'
          }}  target='_blank' rel="noreferrer">
            <FaYoutube style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="https://in.pinterest.com/academyofia/" style={{ 
            color: 'white', 
            fontSize: '20px',
            backgroundColor: '#fa8017',
            border: '2px solid orange',
            borderRadius: '50%',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          width: '50px',
            height: '50px'
          }}  target='_blank' rel="noreferrer">
            <FaPinterestP style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
        </div>
        
        {/* Join Us Image Button - fixed position */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '60px',
          width: '60px',
          backgroundImage: `url(${JoinUsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 8px 8px 0',
          cursor: 'pointer',
          zIndex: '10'
        }} />
      </div>
      
      {/* CSS to show the component on desktop */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            div[style*="display: none"] {
              display: block !important;
            }
          }
        `
      }} />
    </div>
  );
};

export default JoinUs;