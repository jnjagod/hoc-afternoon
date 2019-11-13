import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExchangedCurrency from './components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <ExchangedCurrency />
      </>
    );
  }
}

export default App;
