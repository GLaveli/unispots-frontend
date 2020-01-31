import React from 'react';
import './App.css';

import logo from './assets/spot text logo.png'

import Routes from './routes';

function App() {


  return (
    <div className="container">
      <img src={logo} className="spotLogo" alt="Spot logo" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
