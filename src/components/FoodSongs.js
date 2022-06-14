import React from 'react';
import PineapplePhoto from '../images/pineapple.png';

const FoodSongs = (props) => {

  return (
    <div className="food-songs" style={{ minHeight: '100%', backgroundColor: 'rgba(189,149,74, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>Food & Drink Songs</h1>
        <iframe title="food songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '2.5rem'}} 
            src="https://open.spotify.com/embed/playlist/1UWnJIh3aD2fTUj2m1uE7g?utm_source=generator" 
            width="100%" height="480" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '45%', margin: '0.5rem auto', padding: '0.5rem', borderRadius: '50%'}}>
        <img
            src={PineapplePhoto}
            alt="pineapple"
            style={{ borderRadius: '50%' }}
        />
        </div>
    </div>
  );
};

export default FoodSongs;