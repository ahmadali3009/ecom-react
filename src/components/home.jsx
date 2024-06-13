import React from 'react';
import '../App.css';
import Imageswiper from './imageswiper';
import Jacketproducts from './jacketproducts';
import { FaCheck } from "react-icons/fa"
import { Link } from 'react-router-dom';
export default function Home(props) {
  return (
    <>
      <Imageswiper />
      <div className='container categories'>
        <h5>Categories</h5>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col mt-4">
            <div className="card border-0">
              <img src="/src/assets/imgs/j1 (2).png" className="card-img-top" alt="..." />
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
              <img src="/src/assets/imgs/pic2.jpg" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Sports Wear</strong></h5>
                <Link to="/products/Sports-Wear" className='btn btn-outline-secondary'>
                  VIEW ALL RANGE --
                </Link>              </div>
            </div>
          </div>
          <div className="col mt-4 ">
            <div className="card border-0">
              <img src="/src/assets/imgs/j1 (13).png" className="card-img-top" alt="..." style={{ borderRadius: "6px" }} />
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

      <div className='fixed-img'>
        <div className='text-container' >
          <h4 className='w-100'>PAY LESS, BUY BEST</h4>
          <h1 className='w-150 fw-bold'>Leather Jackets</h1>
          <Link to="/products/Leather-Jacket" className='btn btn-outline-secondary'>
                  VIEW ALL RANGE --
                </Link>        </div>
      </div>


      <div className='container jackett'>
        <h5>LEATHER JACKETS</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/j1 (10).png"} title={"Tawton Leather Fashion Jacket"} code={"LJ-8123"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/homepage2.jpg"} title={"Nicole Ladies Jacket"} code={"LJ-8198"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/homepage3.jpg"} title={"Greta Ladies Jacket"} code={"LJ-8199"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/homepage4.jpg"} title={"Solar Leather Fashion Jacket"} code={"LJ-8124"} />
          </div>
        </div>
      </div>

      <div className='container jacket'>
        <h5>Versatile Jacket</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/v (1).jpg"} title={"Versatile wear"} code={"vw-0007"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/v (9).jpg"} title={"Versatile wear"} code={"vw-6005"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/v (2).jpg"} title={"Versatile wear"} code={"vw-0008"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/v (4).jpg"} title={"Versatile wear"} code={"vw-6009"} />
          </div>
        </div>
      </div>

      <div className='container jacket'>
        <h5>Sports wear</h5>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/sports/sports (1).jpg"} title={"Baseball Jersey"} code={"bbj-0007"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/sports/sports (4).jpg"} title={"American Football Uniform"} code={"AFU-6009"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/sports/sports (13).jpg"} title={"BASKETBALL UNIFORM"} code={"bb-0002"} />
          </div>
          <div className="col">
            <Jacketproducts imgurl={"/src/assets/imgs/sports/sports (23).jpg"} title={"Baseball Jersey"} code={"bbj-0001"} />
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


    </>
  );
}
