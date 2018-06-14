import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import ListContainer from './ListContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo Map</h1>
        </header>
        <section class="flex-container">
          <ListContainer className="flex-item flex-list" />
          <MapContainer google={this.props.google} className="flex-item flex-map"/>
        </section>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '<insert-api-key-here>',
})(App)

