import React from 'react';
import logo from './logo.svg';
import './App.css';
import KadoIFrameModal from './components/KadoIFrameModal';

function App() {
  return (
    <div className="App" id="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Web3 Payments Infrastructure</code>
          <br />
          <br />
          On/Off-Ramp Demo
        </p>
        <div>
          <KadoIFrameModal />
        </div>
      </header>
    </div>
  );
}

export default App;
