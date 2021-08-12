import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './components/routes/routes.js';
// import Acasa from './components/pages/acasa/acasa.js';

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
