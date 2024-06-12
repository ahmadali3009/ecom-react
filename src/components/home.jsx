import React from 'react';
import '../App.css';
import Imageswiper from './imageswiper';
import Jacketproducts from './jacketproducts';
import {FaCheck} from "react-icons/fa"
export default function Home(props) {
  return (
    <>
      <Imageswiper />
      <div className='container categories'>
        <h5>Categories</h5>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col mt-4">
            <div className="card border-0">
              <img src="/src/assets/imgs/pic1.jpg" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Casual Wear</strong></h5>
                <button className='btn btn-outline-secondary '>VIEW ALL RANGE --</button>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <div className="card border-0">
              <img src="/src/assets/imgs/pic2.jpg" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Sports Wear</strong></h5>
                <button className='btn btn-outline-secondary'>VIEW ALL RANGE --</button>
              </div>
            </div>
          </div>
          <div className="col mt-4 ">
            <div className="card border-0">
              <img src="/src/assets/imgs/pic3.jpg" className="card-img-top" alt="..." style={{ borderRadius: "6px" }} />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Active Wear</strong></h5>
                <button className='btn btn-outline-secondary'> VIEW ALL RANGE -- </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed-img'>
        <div className='text-container' >
          <h4 className='w-100'>PAY LESS, BUY BEST</h4>
          <h1 className='w-150 fw-bold'>Leather Jackets</h1>
          <button className='btn btn-outline-secondary w-100'>VIEW ALL --</button>
        </div>
      </div>


      <div className='container jacket'>
  <h5>LEATHER JACKETS</h5>
  <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">         
    <div className="col">
      <Jacketproducts imgurl={"/src/assets/imgs/homepagej1.jpg"} title={"Tawton Leather Fashion Jacket"} code={"LJ-8123"}/>
    </div>
    <div className="col">
      <Jacketproducts imgurl={"/src/assets/imgs/homepagej2.jpg"} title={"Nicole Ladies Jacket"} code={"LJ-8198"} />
    </div>
    <div className="col">
      <Jacketproducts imgurl={"/src/assets/imgs/homepagejacket3.jpg"} title={"Greta Ladies Jacket"} code={"LJ-8199"}/>
    </div>
    <div className="col">
      <Jacketproducts imgurl={"/src/assets/imgs/homepagej4.jpg"} title={"Solar Leather Fashion Jacket"} code={"LJ-8124"}/>
    </div>
  </div>
</div>

<section className="provide-services-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2>Main Heading Above Providing Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
              <FaCheck className="icon check my-4"/>
              <h5 className="card-title">OEM PROCESSING</h5>
                <p className="card-text">
                  You can choose the goods from our website and then affix your logo as required
                </p>
                <a href="#" className="btn btn-outline-secondary w-100 mt-3">READ MORE</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <FaCheck className="icon check my-4"/>
                <h5 className="card-title">CUSTOMIZE BY PICTURES</h5>
                <p className="card-text">
                  You only need to provide the pattern, details, dimensions and reference fabric
                </p>
                <a href="#" className="btn btn-outline-secondary w-100 mt-3">READ MORE</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
              <FaCheck className="icon check my-4" />
              <h5 className="card-title">CUSTOMIZE BY SAMPLES</h5>
                <p className="card-text">
                  Process according to your requirements, perfect sample details to ensure product quality
                </p>
                <a href="#" className="btn btn-outline-secondary w-100 mt-3">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
