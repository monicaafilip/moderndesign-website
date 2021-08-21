import React from 'react';
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import MediaObjectLeft from '../../components/media-objects/media-object-left';
import MediaObjectRight from '../../components/media-objects/media-object-right';
import Navbar from '../../components/navbar/navbar';
import './acasa.css';

const Acasa = () => {
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
