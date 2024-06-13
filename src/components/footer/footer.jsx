import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create this CSS file and import it

const Footer = () => {
  return (
    <footer className="footer text-dark py-5 mt-5">
      <div className="containerr bg-white p-4 rounded shadow-sm">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 text-center">
            <h5 className="mb-3">Jovial Hub</h5>
            <img src="/src/assets/imgs/jovial.jpeg" alt="Company Logo" className="footer-logo mb-3" />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">About</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Discover</h5>
            <ul className="list-unstyled">
              <li><Link to="/products/Leather-Jacket" className="footer-link">Leather Jacket</Link></li>
              <li><Link to="/products/Sports-Wear" className="footer-link">Sports Wear</Link></li>
              <li><Link to="/products/Versatile-Wear" className="footer-link">Versatile Wear</Link></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-3">Location</h5>
            <p className="footer-address">123 Main Street, Sialkot, Pakistan</p>
            <h5 className="mt-4 mb-3">Style</h5>
            <p className="footer-style">Crafted with passion and precision</p>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">Website built with React and Bootstrap &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
