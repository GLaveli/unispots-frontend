import React from 'react';
import './App.css';

import logo from './assets/spot text logo.png'

function App() {
  return (
    <div className="container">
      <img src={logo} className="spotLogo" alt="Spot logo" />

      <div className="content">
        <p>
          Passou no <strong>vestibular</strong> e não tem onde ficar ? o <strong>Spot</strong> te mostra!
        </p>

        <form>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            placeholder="seu@email.com.br" />
          <button className="btn" type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
