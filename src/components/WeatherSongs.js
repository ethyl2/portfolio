import React from 'react';
import LightningPhoto from '../images/lightning.jpg';

const WeatherSongs = (props) => {

  return (
    <div className="weather-songs" style={{ minHeight: '100%'}}>
      <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '2rem auto', padding: '1rem 0.5rem'}}>Weather Songs</h1>
      <iframe title="playlist" style={{borderRadius:'12px', width: '80%', marginBottom: '14rem'}} 
        src="https://open.spotify.com/embed/playlist/4JxEAJ7ov9gNU2pVXHt1Yn?utm_source=generator&theme=0"
         width="100%" height="380" frameBorder="0" 
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '75%', margin: '1rem auto', padding: '2rem', borderRadius: '0.5rem'}}>
        <img
            src={LightningPhoto}
            alt="lightning"
            style={{ borderRadius: '0.25rem' }}
        />
      </div>
    </div>
  );
};

export default WeatherSongs;
