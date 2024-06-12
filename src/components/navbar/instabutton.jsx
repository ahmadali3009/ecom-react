import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import './style.css';

const InstagramButton = () => {
  return (
    <a 
      href="https://instagram.com/jawad_butt50" 
      className="instagram-button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <IoLogoInstagram  />
    </a>
  );
};

export default InstagramButton;
