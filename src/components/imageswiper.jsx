import React, { useState, useEffect } from "react";
import "../App.css"; // assuming you have a CSS file for styling
import { LuShirt } from "react-icons/lu";
import { Link } from "react-router-dom";
import bg1 from '../assets/imgs/bg1.jpeg'
import bg2 from '../assets/imgs/bg3.jpg'


const Imageswiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2); // Change 2 to the number of images you have
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <div className={`image-slide ${currentSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${bg1})` }}>
        <div className="text-overlay">
          <div className="text-container">
            <LuShirt fontSize={"30px"} style={{ color: '#ff4c4c', marginBottom: '20px' }} />
            <h1 className="enhanced-h1">Leather Jackets</h1>
            <p className="enhanced-p">A spoken or written account of a person, object, or event: "people who had seen him were able to give a description"</p>
            <Link to="/products/Leather-Jacket" className='btn btn-outline-secondary enhanced-btn'>
            Explore
                </Link>          </div>
        </div>
      </div>
      <div className={`image-slide ${currentSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: `url(${bg2})` }}>
        <div className="text-overlay">
          <div className="text-container">
            <LuShirt fontSize={"30px"} style={{ color: '#ff4c4c', marginBottom: '20px' }} />
            <h1 className="enhanced-h1">Leather Jackets</h1>
            <p className="enhanced-p">A spoken or written account of a person, object, or event: "people who had seen him were able to give a description"</p>
            <Link to="/products/Leather-Jacket" className='btn btn-outline-secondary enhanced-btn'>
            Explore
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageswiper;
