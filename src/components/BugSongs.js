import React from 'react';
import ButterflyPhoto from '../images/butterfly.jpg';

const BugSongs = (props) => {

  return (
    <div className="bird-songs" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>
            <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', margin: '1rem auto'}}>Bug Songs</h1>
            <p style={{color: 'white', fontSize: '18px' }}>All about those insects, arachnids, and myriapods you know and love/hate.</p>
        </div>

        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/3cfrWBzc9zBcPgISQYIrJr?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
       
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '0.75rem auto', padding: '1rem', borderRadius: '0.5rem'}}>
            <img
                src={ButterflyPhoto}
                alt="beautiful butterfly"
                style={{ borderRadius: '3%' }}
            />
        </div>
    </div>
  );
};

export default BugSongs;