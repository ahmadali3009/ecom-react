import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-dark py-5 mt-5">
      <div className="container bg-white">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Company Logo</h5>
            {/* Add your company logo here */}
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>About Section</li>
              <li>Home</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li>Leather Jacket</li>
              <li>Active Wear</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Location</h5>
            <p>Address of the Company</p>
            <h5>Style</h5>
            <p>Any additional style information</p>
          </div>
        </div>
        <hr />
        <p className="text-center">Website built with React and Bootstrap</p>
      </div>
    </footer>
  );
};

export default Footer;
