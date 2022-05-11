import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import WeatherSongs from './components/WeatherSongs';

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
        <Route path="/weather" component={WeatherSongs} />
        <Route path="/about" component={About} />
        <Route component={Home} />
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
