import React from 'react';
import BirdPhoto from '../images/bird.jpg';

const BirdSongs = (props) => {

  return (
    <div className="bird-songs" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>Bird Songs</h1>
        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/6c8uzDbE3uSQLpj78Zc8T5?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
       
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '33%', margin: '0.75rem auto', padding: '1rem', borderRadius: '0.5rem'}}>
            <img
                src={BirdPhoto}
                alt="plump bird"
                style={{ borderRadius: '3%' }}
            />
        </div>
    </div>
  );
};

export default BirdSongs;