import React from 'react';
import './produse.css';
import '../../App.css';
import Navbar from '../../components/navbar/navbar';
import Product from '../../components/product/product';
import Footer from '../../components/footer/footer';

const  Produse = () => {
  return (
    <div className="App">
        <div className="container-fluid mainHomePage">
          <Navbar/>
          
          <section class="portfolio">
			  <div class="container">
			    <div class="portfolio-wrapper">
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    <Product/>
			    </div>
			   </div>
			</section>

          <Footer/>
        </div>
    </div>
  );
}

export default Produse;
