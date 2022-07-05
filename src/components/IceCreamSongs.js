import React from 'react';
import IceCreamPhoto from '../images/ice-cream.jpg';

const IceCreamSongs = (props) => {

  return (
    <div className="ice-cream-songs" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '85%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>
            <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', margin: '1rem auto'}}>Ice Cream Songs</h1>
            <p style={{color: '#DBE5CC', fontSize: '18px' }}>"Tomorrow, we can eat broccoli, but today is for ice cream." — Malory Hobson</p>
            <p style={{color: '#F2DBE3', fontSize: '18px' }}>"Without ice cream, there would be darkness and chaos." — Don Kardong</p>
            <p style={{color: '#DEDAD1', fontSize: '18px' }}>"When I'm no longer rapping, I want to open up an ice cream parlor and call myself Scoop Dogg." — Snoop Dogg</p>
        </div>

        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/62pygMAFVxd43PZsjnctKm?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
       
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '38%', margin: '0.75rem auto', padding: '0.5rem', borderRadius: '0.5rem'}}>
            <img
                src={IceCreamPhoto}
                alt="beautiful ice creams"
                style={{ borderRadius: '3%' }}
            />
        </div>
    </div>
  );
};

export default IceCreamSongs;