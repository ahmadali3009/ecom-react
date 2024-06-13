import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home'
import ProductDetail from './components/productdetail';
import Categories from './components/product/categories';
import CategoryDetail from './components/product/categorydetail';
import Productlist from './components/product/productlist';
import Footer from './components/footer/footer';
import AboutSection from './components/about/about';
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css";
import ContactPage from './components/contact/contact';
import ServicesPage from './components/servicesecom/services';
function App() {
  return (
    <>
    <div className='bg-secondary text-black text-center p-2 fw-bold' style={{ fontSize: '1.5rem' }}>
  Welcome to Jovial Hub!
</div>
      <Navbar title="AhmedWeb" imgurl={"/src/assets/imgs/jovial.jpeg"}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:code" element={<ProductDetail />} />
        <Route path='/products' element={<Categories/>}/>
        <Route path='/products/:code' element={<CategoryDetail/>}></Route>
        <Route path='/about' element={<AboutSection/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/services' element={<ServicesPage/>}></Route>

      </Routes>
      <Footer/>
    </>
  );
}

export default App
