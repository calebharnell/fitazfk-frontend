import React, { Component } from 'react';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
