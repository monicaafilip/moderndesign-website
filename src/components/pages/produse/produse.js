import React from 'react';
import './produse.css';
import '../../../App.css';

import Navbar from '../../navbar/navbar.js';
import Footer from '../../footer/footer.js';
import Product from '../../product/product';


function Produse() {
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
