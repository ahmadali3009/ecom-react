import React from 'react';
import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import { IoSearchCircleOutline } from "react-icons/io5";
import WhatsappButton from './whatappbutton';
import InstagramButton from './instabutton';

export default function Navbar(props) {
  const iconStyle = {
    fontSize: '30px',
    transition: 'transform 0.2s ease-in-out',
  };

  const hoverStyle = {
    transform: 'scale(1.2)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-2"> {/* Add mx-5 class for horizontal margin */}
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={props.imgurl} alt="Company Logo" width="60px" height="60px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/products">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/services">Services</Link>
            </li>
          </ul>
          <form className="d-flex">
            <WhatsappButton />
            <InstagramButton/>
          </form>
        </div>
      </div>
    </nav>
  );
}
