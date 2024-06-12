import React from 'react';
import { IoLogoWhatsapp} from 'react-icons/io5';
import './style.css'; // Import your CSS file for custom styles

const WhatsappButton = () => {
  const whatsappNumber = '03400128950'; // Replace with your WhatsApp number

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <IoLogoWhatsapp />
      
    </a>
  );
};

export default WhatsappButton;
