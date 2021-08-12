import React from 'react';
import './acasa.css';

import Navbar from '../../navbar/navbar.js';
import Carousel from '../../carousel/carousel.js';
import MediaObjectRight from '../../media-objects/media-object-right.js';
import MediaObjectLeft from '../../media-objects/media-object-left.js';
import Footer from '../../footer/footer';

function Acasa() {
  return (
    <div className="App">
        <div className="container-fluid mainHomePage">
          <Navbar/>
          <Carousel/>
          <MediaObjectLeft/>
          <MediaObjectRight/>
          <Footer/>
        </div>
    </div>
  );
}

export default Acasa;
