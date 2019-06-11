import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import apiKey from './config';
import Header from './Components/Header';
import PhotoGallery from './Components/PhotoGallery';
import NotFound from './Components/NotFound';

class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  /*performs initial search to have content loaded upon app launch
  (default search is 'nature', declared in performSearch arg)*/
  componentDidMount(){
    this.performSearch();
  }

  //data fetching
  performSearch = (query = 'nature') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => console.log('Error fetching data', error));
  }

  /*renders header(nav, search) and then uses a switch to render the body based on nav links or search*/
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header
            onSearch={this.performSearch}
            onClick={this.performSearch}
          />
          {
            (this.state.loading)
              ? <h2>Loading...</h2>
              : <Switch>
                  <Route exact path='/' render={ () => <PhotoGallery data={this.state.photos}/>} />
                  <Route path='/search' render={ () => <PhotoGallery data={this.state.photos}/>} />
                  <Route path='/landscapes' render={ () => <PhotoGallery  onClick={this.performSearch('landscapes')} data={this.state.photos}/>} />
                  <Route path='/cityscapes' render={ () => <PhotoGallery  onClick={this.performSearch('cityscapes')} data={this.state.photos}/>} />
                  <Route path='/seascapes' render={ () => <PhotoGallery  onClick={this.performSearch('seascapes')} data={this.state.photos}/>} />
                  <Route component={NotFound} />
                </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
