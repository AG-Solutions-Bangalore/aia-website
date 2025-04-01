import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaHeadphonesAlt } from 'react-icons/fa';
import JoinUsImage from '../../assets/img/joinus/join_us.png';
import { BsWhatsapp, BsMicFill } from 'react-icons/bs';
import { BiMessage, BiPhone } from 'react-icons/bi';

const ShareLink = () => {
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
        right: '2rem',
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
        }}>
          <a href="https://api.whatsapp.com/send/?phone=%2B919311320114&text=Hello%2C+I+am+looking+for+Academy+of+Internal+Audit&type=phone_number&app_absent=0" style={{ 
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
          }} target='_blank' rel="noreferrer">
            <BsWhatsapp style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="mailto:support@aia.in.net" style={{ 
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
          }} >
            <BiMessage style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
          <a href="tel:+919311320114" style={{ 
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
          }}  >
            <BiPhone style={{
                width:"2rem",
                height:"2rem"
            }} />
          </a>
         
        </div>
        
        {/* Audio Icon Button - fixed position */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '50px',
          width: '50px',
          backgroundColor: '#fa8017',
          border: '2px solid orange',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: '10'
        }}>
          <FaHeadphonesAlt style={{
            color: 'white',
            width: "2rem",
            height: "2rem"
          }} />
        </div>
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

export default ShareLink;