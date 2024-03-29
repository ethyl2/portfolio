import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

import WeatherSongs from './components/WeatherSongs';
import FlowerSongs from './components/FlowerSongs';
import ColorSongs from './components/ColorSongs';
import BirdSongs from './components/BirdSongs';
import Musicals from './components/Musicals';
import HomeSongs from './components/HomeSongs';
import FoodSongs from './components/FoodSongs';
import BugSongs from './components/BugSongs';
import IceCreamSongs from './components/IceCreamSongs';
import PlaylistIndex from './components/PlaylistIndex';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <div className="App" id="page-container">
      <div id="content-wrap">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/weather-songs" component={WeatherSongs} />
        <Route path="/flower-songs" component={FlowerSongs} />
        <Route path="/color-songs" component={ColorSongs} />
        <Route path="/bird-songs" component={BirdSongs} />
        <Route path="/musicals" component={Musicals} />
        <Route path="/home-songs" component={HomeSongs} />
        <Route path="/food-songs" component={FoodSongs} />
        <Route path="/bug-songs" component={BugSongs} />
        <Route path="/ice-cream-songs" component={IceCreamSongs} />
        <Route path="/playlists" component={PlaylistIndex} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
