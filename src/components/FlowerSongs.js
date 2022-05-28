import React from 'react';
import IrisesPhoto from '../images/irises.jpg';

const FlowerSongs = (props) => {

  return (
    <div className="flower-songs" style={{ minHeight: '100%'}}>
        <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>Flower Songs</h1>
        <iframe title="flower songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/1PV3vRsmKjDFOr6b4MBZ5z?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '75%', margin: '1rem auto', padding: '2rem', borderRadius: '0.5rem'}}>
        <img
            src={IrisesPhoto}
            alt="irises"
            style={{ borderRadius: '50%' }}
        />
      </div>
      
    </div>
  );
};

export default FlowerSongs;