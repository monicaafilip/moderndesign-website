import React from 'react';
import './desprenoi.css';
import '../../App.css';
import Navbar from '../../components/navbar/navbar';
import TitleTextContainer from '../../components/title-text-container/title-text-container';
import Footer from '../../components/footer/footer';
import Divider from '../../components/divider/divider';

const DespreNoi = () => {
  return (
    <div className="App">
        <div className="container-fluid mainHomePage">
        <Navbar/>
        <TitleTextContainer/>
        <Divider/>
        <TitleTextContainer/>
        <Divider/>
        <Footer/>
        </div>
    </div>
  );
}

export default DespreNoi;
