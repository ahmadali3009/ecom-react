import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './style.css';

const ContactPage = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Get in Touch</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p><FaPhoneAlt className="contact-icon" /> 03400128950</p>
              <p><FaEnvelope className="contact-icon" /> JovailHub@gamil.com</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Sialkot, Punjab, Pakistan</p>
            </div>
            <div className="map">
              <iframe 
                title="Sialkot-Pakistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409189.00353719515!2d74.15216618966775!3d32.52529515098666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f95ea0a4df2db%3A0x37614f4a30a3d41f!2sSialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1637038671967!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <h4>Contact Form</h4>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-control" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
