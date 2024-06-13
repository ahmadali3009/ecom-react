import React from 'react';
import "./aboutstyle.css"
// import finestQualityImage from './finest-quality.jpg'; // Import your image

const AboutSection = () => {
  return (
    <section className="about-section py-5" style={{ marginLeft: '150px', marginRight: '150px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/src/assets/imgs/finnest.jpg" alt="Finest Quality Products" className="img-fluid mb-4 rounded shadow" />
          </div>
          <div className="col-md-6">
            <h2 className="section-title mb-4">Finest Quality Products</h2>
            <h4 className="sub-title">by Jovial Hub</h4>
            <p className="detail">
              <strong>ESTABLISHED SINCE 2007</strong><br />
              We Are Manufacturers And Exporters Of Premium Quality Leather Jackets And Apparel. With Our Dedicated And Hardworking Expertise, Stitch Fam Apparel Have Been Able To Provide Best Quality Products To Our Customers At Competent Prices. Our Dynamic Team With Best Talent And Latest Printing Technologies Is Continuously Enhancing Values Of Stitch Fam Apparel And Its Clients.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h4 className="sub-title mt-5">How We Do It</h4>
            <p className="detail">
              We use only the high quality raw material and components available today. In fact, we proudly announce that we offer 100% satisfaction guarantee. We manufacture and export the high quality Leather wear, and sports products especially Team wear, Gym wear, Street wear, Work wear, hospital wear, Cycling wear products and have good reputation for quality products at competitive prices.
              <br /><br />
              <strong>Quality Policy and Objectives:</strong><br />
              Quality built Sports products according to customer’s requirements at competitive prices. Total Customer satisfaction from first contract to delivery with best and honest service. Investment in the appropriate machinery, best method and suitable processes. To meet these aims, Stitch Fam Apparel Recruit and train dedicated, knowledgeable & trained workers. Provide a suitable environment and resources. operate sound Management Systems and practices.
              <br /><br />
              Our philosophy is to provide serviceable products to meet the requirements of our Clients for quality serving to their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
