import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './components/routes/routes.js';

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
