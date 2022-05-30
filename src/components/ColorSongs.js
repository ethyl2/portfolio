import React from 'react';
import LeavesPhoto from '../images/colored-leaves.jpg';

const ColorSongs = (props) => {

  return (
    <div className="color-songs" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>Color Songs</h1>
        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/59KjfF70ONjHGsRqyul0NA?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '75%', margin: '1rem auto', padding: '2rem', borderRadius: '0.5rem'}}>
        <img
            src={LeavesPhoto}
            alt="colorful leaves"
            style={{ borderRadius: '50%' }}
        />
        </div>
    </div>
  );
};

export default ColorSongs;