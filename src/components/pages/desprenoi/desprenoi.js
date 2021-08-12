import React from 'react';
import './desprenoi.css';
import '../../../App.css';

import Navbar from '../../navbar/navbar.js';
import Footer from '../../footer/footer.js';
import TitleTextContainer from '../../title-text-container/title-text-container.js'
import Divider from '../../divider/divider.js'

function DespreNoi() {
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
