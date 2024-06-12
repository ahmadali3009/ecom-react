import React, { useState, useEffect } from "react";
import "../App.css"; // assuming you have a CSS file for styling
import { LuShirt } from "react-icons/lu";

const Imageswiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2); // Change 2 to the number of images you have
      <LuShirt fontSize={"30px"}/>

    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="image-slider">
      <div className="image-slide" style={{ backgroundImage: `url('/src/assets/imgs/bg1.jpeg')`, display: currentSlide === 0 ? 'block' : 'none' }}>
        <div className="text-overlay">
          <div className="container col-9">
            <LuShirt fontSize={"30px"}/>
            <h1 className="">Leather Jackets</h1>
            <p className="fs-6">the a spoken or written account of a person, object, or event:
              "people who had seen him were able to give a description" </p>
            <button className="btn btn-outline-secondary" > Explore </button>
          </div>
        </div>
      </div>
      <div className="image-slide" style={{ backgroundImage: `url('/src/assets/imgs/images.jpeg')`, display: currentSlide === 1 ? 'block' : 'none' }}>
        <div className="text-overlay">
        <div className="container col-9">
            <h1 className="">Leather Jackets</h1>
            <p className="fs-6">the a spoken or written account of a person, object, or event:
              "people who had seen him were able to give a description" </p>
            <button className="btn btn-outline-secondary" > Explore </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageswiper;
