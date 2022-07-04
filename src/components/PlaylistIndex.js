import React from 'react';
import { NavLink } from 'react-router-dom';
import CassettesPhoto from '../images/cassette-tapes.jpg';

const playlistLinks = {
    "Weather" : ['/weather-songs', '#DB81D5'],
    "Colors" : ['/color-songs', '#E4D46F'],
    "Flowers" : ['/flower-songs', '#DE974D'],
    "Birds" : ['/bird-songs', '#9A532C'],
    "Food" : ['/food-songs', '#B3BE61'],
    "Musicals" : ['/musicals', '#AC4D55'],
    "Home" : ['/home-songs', '#B6D8E2'],
    "Bugs" : ['/bug-songs', '#40e0d0'],
    "Ice Cream" : ['ice-cream-songs', '#F2DBE3'],
    
}

const formattedLinks = []

Object.entries(playlistLinks).forEach((link) => {
    formattedLinks.push(<NavLink key={link[0]} activeClassName="active" to={link[1][0]} style={{ margin: '0.5rem auto',  color: link[1][1] }}>
        { link[0]}
    </NavLink>)
})

const PlaylistIndex = (props) => {

  return (
    <div className="playlist-index" style={{ minHeight: '100%'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '75%', margin: '1rem auto', padding: '2rem', borderRadius: '0.5rem'}}>
            <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '95%', margin: '1rem auto', padding: '1rem 0.5rem'}}>My Spotify Playlists</h1>
            <p>I love finding music from a wide variety of genres that share subjects in common.</p>
            <p style={{ fontStyle: 'italic', fontSize: '1.25rem'}} >Here are some of my favorite lists:</p>
            
            <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-around', alignItems: 'center', fontSize: '2rem', margin: '2rem auto 0.5rem auto' }}>
                { formattedLinks }
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
