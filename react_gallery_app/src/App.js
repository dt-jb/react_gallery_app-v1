import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import apiKey from './config';
import Header from './Components/Header';
import PhotoGallery from './Components/PhotoGallery';
import NoResults from './Components/NoResults';

class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'dogs') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => console.log('Error fetching data', error));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch} />
          <PhotoGallery data={this.state.photos}/>
          <Switch>
          { /*  <Route exact path='/' render={ () => <PhotoGallery data={this.state.photos}/>}/>
           <Route path='/cats' render={ () => <PhotoGallery /> }/>
            <Route path='/dogs' render={ () => <PhotoGallery /> }/>
            <Route path='/computers' render={ () => <PhotoGallery /> }/>
            <Route path='/search' component={ <PhotoGallery /> }/>
            <Route component={NoResults} />*/}
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
