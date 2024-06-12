import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../components/product/productdetail.css"; // Import CSS file for styling

const ProductDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const imgurl = queryParams.get('imgurl');
  const title = queryParams.get('title');
  const { code } = useParams();
  
  // State to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to update mouse position
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width;
    const y = (e.pageY - top) / height;
    setMousePosition({ x, y });
  };

  // Calculate scale based on mouse distance from center
  const scale = 1 + Math.abs((mousePosition.x - 0.5) * 2) * 0.5; // Max scale factor is 1.5

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <h2 className="text-center mb-4">Product Detail Page</h2>
          <div 
            className="image-zoom-container overflow-auto" // Enable scrolling if content overflows
            onMouseMove={handleMouseMove} // Update mouse position on mouse move
          >
            <img 
              src={imgurl} 
              className="zoom-image img-fluid" 
              alt="Product" 
              style={{
                transformOrigin: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`, // Set transform origin based on mouse position
                width: "100%", // Set width to fill container
                maxHeight: "400px", // Set max height for mobile screens
              }}
            />
          </div>
          <h1 className="text-center mt-4">{title}</h1>
          <p className="text-center">Product Code: {code}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
