import React, { Component } from 'react';
import logo from './logo1.svg';
import './App.css';
import Tickers from './components/Tickers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CryptoTick</h1>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
