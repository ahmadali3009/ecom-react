import React from 'react';
import Jacketproducts from '../jacketproducts'; // Import your product component
import { FaTruck } from 'react-icons/fa'; // Import delivery icon

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
        <div className="row row-cols-1 row-cols-md-4 g-4">
        <Jacketproducts imgurl={"/src/assets/imgs/j1 (10).png"} title={"Tawton Leather Fashion Jacket"} code={"LJ-8123"} />
        <Jacketproducts imgurl={"/src/assets/imgs/homepage4.jpg"} title={"Solar Leather Fashion Jacket"} code={"LJ-8124"} />
        <Jacketproducts imgurl={"/src/assets/imgs/homepage3.jpg"} title={"Greta Ladies Jacket"} code={"LJ-8199"} />
        <Jacketproducts imgurl={"/src/assets/imgs/homepage2.jpg"} title={"Nicole Ladies Jacket"} code={"LJ-8198"} />
        </div>
        <div className="text-center mt-3">
          <a href="/products/leather-jackets" className="btn btn-outline-secondary">Explore Leather Jackets</a>
        </div>
      </section>

      {/* Versatile Jackets Section */}
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
      <div className="text-center mt-3">
          <a href="/products/Versitilewear" className="btn btn-outline-secondary">Explore Leather Jackets</a>
    </div>

      {/* Active Wear Section */}
      <section className="mb-5">
       
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
        <div className="text-center mt-3">
          <a href="/products/active-wear" className="btn btn-outline-secondary">Explore Active Wear</a>
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
        <a href="/products" className="btn btn-primary btn-lg">Shop Now</a>
      </section>

    </div>
  );
}

export default ServicesPage;
