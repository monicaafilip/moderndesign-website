import React from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom';

import Routes from './components/routes/routes.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes/>
    </Router>
  );
}

export default App;
