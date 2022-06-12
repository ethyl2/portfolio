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
import PlaylistIndex from './components/PlaylistIndex';

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
        <Route path="/playlists" component={PlaylistIndex} />
        <Route path="/about" component={About} />
        <Route component={Home} />
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
