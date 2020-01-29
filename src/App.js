import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} className="spotLogo" />

      <div className="content">
        <p>
          Passou no <strong>vestibular</strong> e não tem onde ficar ? o <strong>Spot</strong> te mostra!
    </p>
      </div>
    </div>
  );
}

export default App;
