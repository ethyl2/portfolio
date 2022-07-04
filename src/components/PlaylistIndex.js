import React from 'react';
import { NavLink } from 'react-router-dom';
import CassettesPhoto from '../images/cassette-tapes.jpg';
const PlaylistIndex = (props) => {

  return (
    <div className="playlist-index" style={{ minHeight: '100%'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '75%', margin: '1rem auto', padding: '2rem', borderRadius: '0.5rem'}}>
            <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '95%', margin: '1rem auto', padding: '1rem 0.5rem'}}>My Spotify Playlists</h1>
            <p>I love finding music from a wide variety of genres that share subjects in common.</p>
            <p style={{ fontStyle: 'italic', fontSize: '1.25rem'}} >Here are some of my favorite lists:</p>
            <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-around', alignItems: 'center', fontSize: '2rem', margin: '2rem auto 0.5rem auto' }} >
                <NavLink activeClassName="active" to="/weather-songs" style={{ margin: '0.5rem auto',  color: '#DB81D5'}}>
                Weather
                </NavLink>
                <NavLink activeClassName="active" to="/color-songs" style={{ margin: '0.5rem auto', color: '#E4D46F' }}>
                    Colors
                </NavLink>
                <NavLink activeClassName="active" to="/flower-songs" style={{ margin: '0.5rem auto', color: '#DE974D' }}>
                    Flowers
                </NavLink>
                <NavLink activeClassName="active" to="/bird-songs" style={{ margin: '0.5rem auto', color: '#9A532C'}}>
                    Birds
                </NavLink>
                <NavLink activeClassName="active" to="/food-songs" style={{ margin: '0.5rem auto', color: '#B3BE61' }}>
                    Food
                </NavLink>
                <NavLink activeClassName="active" to="/musicals" style={{ margin: '0.5rem auto', color: '#AC4D55'}}>
                    Musicals
                </NavLink>
                <NavLink activeClassName="active" to="/home-songs" style={{ margin: '0.5rem auto', color: '#B6D8E2'}}>
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/bug-songs" style={{ margin: '0.5rem auto', color: '#40e0d0'}}>
                    Bugs
                </NavLink>
                <NavLink activeClassName="active" to="/ice-cream-songs" style={{ margin: '0.5rem auto', color: '#40e0d0'}}>
                    Ice Cream
                </NavLink>
            </div>
        </div>
      <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '65%', margin: '3rem auto', padding: '1rem', borderRadius: '0.5rem'}}>
        <img
            src={CassettesPhoto}
            alt="cassettes"
            style={{ borderRadius: '0.25rem' }}
        />
      </div>
    </div>
  );
};

export default PlaylistIndex;
