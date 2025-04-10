import React from 'react';
import Jacketproducts from '../jacketproducts'; // Import your product component
import { FaTruck } from 'react-icons/fa'; // Import delivery icon
import { Link } from 'react-router-dom';
import leatherjacket1 from "../../assets/imgs/j1 (10).png"
import leatherjacket2 from "../../assets/imgs/homepage2.jpg"
import leatherjacket3 from "../../assets/imgs/homepage3.jpg"
import leatherjacket4 from "../../assets/imgs/homepage4.jpg"
import Versatile1 from "../../assets/imgs/v (1).jpg"
import Versatile2 from "../../assets/imgs/v (9).jpg"
import Versatile3 from "../../assets/imgs/v (2).jpg"
import Versatile4 from "../../assets/imgs/v (4).jpg"
import sport1 from "../../assets/imgs/sports/sports (1).jpg"
import sport2 from "../../assets/imgs/sports/sports (4).jpg"
import sport3 from "../../assets/imgs/sports/sports (13).jpg"
import sport4 from "../../assets/imgs/sports/sports (23).jpg"
const ServicesPage = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4">Explore Our Premium Collection</h1>
        <p className="lead">Discover Quality Leather Jackets, Versatile Jackets, and Active Wear</p>
      </div>

      {/* Leather Jackets Section */}
      <section className="mb-5">
        <h2 className="mb-3">Leather Jackets</h2>
        <div className='container jackett'>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <Jacketproducts imgurl={leatherjacket1} title={"Tawton Leather Fashion Jacket"} code={"LJ-8123"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={leatherjacket2} title={"Nicole Ladies Jacket"} code={"LJ-8198"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={leatherjacket3} title={"Greta Ladies Jacket"} code={"LJ-8199"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={leatherjacket4} title={"Solar Leather Fashion Jacket"} code={"LJ-8124"} />
          </div>
        </div>
      </div>
        <div className="text-center mt-3">
          <Link to="/products/Leather-Jacket" className="btn btn-outline-secondary">Explore Leather Jackets</Link>
        </div>
      </section>

      {/* Versatile Jackets Section */}
      <div className='container jacket'>
        <h5>Versatile Jacket</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <Jacketproducts imgurl={Versatile1} title={"Versatile wear"} code={"vw-0007"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={Versatile2} title={"Versatile wear"} code={"vw-6005"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={Versatile3} title={"Versatile wear"} code={"vw-0008"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={Versatile4} title={"Versatile wear"} code={"vw-6009"} />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
          <Link to="/products/Versatile-Wear" className="btn btn-outline-secondary">Explore Leather Jackets</Link>
    </div>

      {/* Active Wear Section */}
      <section className="mb-5">
       
      <div className='container jacket'>
        <h5>Sports wear</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <Jacketproducts imgurl={sport1} title={"Baseball Jersey"} code={"bbj-0007"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={sport2} title={"American Football Uniform"} code={"AFU-6009"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={sport3} title={"BASKETBALL UNIFORM"} code={"bb-0002"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={sport4} title={"Baseball Jersey"} code={"bbj-0001"} />
          </div>
        </div>
      </div>
        <div className="text-center mt-3">
          <Link to="/products/Sports-Wear" className="btn btn-outline-secondary">Explore Active Wear</Link>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="bg-light p-4 mb-5">
        <div className="container">
          <h2 className="text-center mb-4">Delivery Options</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <FaTruck style={{ fontSize: '3rem', color: '#25D366' }} />
              </div>
              <h4 className="mt-3">Worldwide Shipping</h4>
              <p className="text-muted">We offer worldwide shipping with tracking options.</p>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <FaTruck style={{ fontSize: '3rem', color: '#25D366' }} />
              </div>
              <h4 className="mt-3">Express Delivery</h4>
              <p className="text-muted">Choose express delivery for faster shipping.</p>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <FaTruck style={{ fontSize: '3rem', color: '#25D366' }} />
              </div>
              <h4 className="mt-3">Free Returns</h4>
              <p className="text-muted">Enjoy hassle-free returns on all orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2>Ready to Explore?</h2>
        <p>Start shopping now and discover your perfect jacket or activewear!</p>
        <Link to="/products" className="btn btn-primary btn-lg">Shop Now</Link>
      </section>

    </div>
  );
}

export default ServicesPage;
