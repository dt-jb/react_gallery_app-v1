import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiKey from './config';
import Header from './Components/Header';
import PhotoGallery from './Components/PhotoGallery';

class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: []
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
