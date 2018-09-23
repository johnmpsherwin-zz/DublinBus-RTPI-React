import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar name="Dublin Bus RTPI"/>
        <Search />
      </div>
    );
  }
}

export default App;
