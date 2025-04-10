import React from 'react';
import '../App.css';
import Imageswiper from './imageswiper';
import Jacketproducts from './jacketproducts';
import { FaCheck } from "react-icons/fa"
import { Link } from 'react-router-dom';
import jacketImage1 from '../assets/imgs/j1 (2).png';
import jacketImage2 from '../assets/imgs/pic2.jpg';
import jacketImage3 from "../assets/imgs/j1 (13).png"
import leatherjacket1 from "../assets/imgs/j1 (10).png"
import leatherjacket2 from "../assets/imgs/homepage2.jpg"
import leatherjacket3 from "../assets/imgs/homepage3.jpg"
import leatherjacket4 from "../assets/imgs/homepage4.jpg"
import Versatile1 from "../assets/imgs/v (1).jpg"
import Versatile2 from "../assets/imgs/v (9).jpg"
import Versatile3 from "../assets/imgs/v (2).jpg"
import Versatile4 from "../assets/imgs/v (4).jpg"
import sport1 from "../assets/imgs/sports/sports (1).jpg"
import sport2 from "../assets/imgs/sports/sports (4).jpg"
import sport3 from "../assets/imgs/sports/sports (13).jpg"
import sport4 from "../assets/imgs/sports/sports (23).jpg"
import { FaTruck } from 'react-icons/fa'; // Import delivery icon
import bikeImage from '../assets/imgs/bike.jpg'; // Adjust the path as necessary




export default function Home(props) {
  return (
    <>
      <Imageswiper />
      <div className='container categories'>
        <h5 className='text-center'>Categories</h5>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col mt-4">
            <div className="card border-0">
              <img src={jacketImage1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Leather Wear</strong></h5>
                <Link to="/products/Leather-Jacket" className='btn btn-outline-secondary'>
                  VIEW ALL RANGE --
                </Link>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <div className="card border-0">
              <img src={jacketImage2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Sports Wear</strong></h5>
                <Link to="/products/Sports-Wear" className='btn btn-outline-secondary'>
                  VIEW ALL RANGE --
                </Link>              </div>
            </div>
          </div>
          <div className="col mt-4 ">
            <div className="card border-0">
              <img src={jacketImage3} className="card-img-top" alt="..." style={{ borderRadius: "6px" }} />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>versatile Wear</strong></h5>
                <Link to="/products/Versatile-Wear" className='btn btn-outline-secondary'>
                  VIEW ALL RANGE --
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed-img-container'>
      <div className='fixed-img' style={{ backgroundImage: `url(${bikeImage})` }}>
        <div className='text-containerr'>
          <h4 className='w-100'>PAY LESS, BUY BEST</h4>
          <h1 className='w-150 fw-bold'>Leather Jackets</h1>
          <Link to="/products/Leather-Jacket" className='btn btn-outline-secondary'>
            VIEW ALL RANGE --
          </Link>
        </div>
      </div>
    </div>


      <div className='container jackett'>
        <h5 className='text-center my-5' >LEATHER JACKETS</h5>
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

      <div className='container jacket'>
        <h5 className='text-center' >Versatile Jacket</h5>
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

      <div className='container jacket'>
        <h5 className='text-center' >Sports wear</h5>
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
      

      <section className="provide-services-section py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mb-4">
        <h2>Main Heading Above Providing Services</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 service-card">
          <div className="card-body text-center">
            <FaCheck className="icon check my-4" />
            <h5 className="card-title">OEM PROCESSING</h5>
            <p className="card-text">
              You can choose the goods from our website and then affix your logo as required
            </p>
            <a href="#" className="btn w-100 mt-3">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 service-card">
          <div className="card-body text-center">
            <FaCheck className="icon check my-4" />
            <h5 className="card-title">CUSTOMIZE BY PICTURES</h5>
            <p className="card-text">
              You only need to provide the pattern, details, dimensions and reference fabric
            </p>
            <a href="#" className="btn w-100 mt-3">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 service-card">
          <div className="card-body text-center">
            <FaCheck className="icon check my-4" />
            <h5 className="card-title">CUSTOMIZE BY SAMPLES</h5>
            <p className="card-text">
              Process according to your requirements, perfect sample details to ensure product quality
            </p>
            <a href="#" className="btn w-100 mt-3">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
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


    </>
  );
}
