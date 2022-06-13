import React from 'react';
import HomePhoto from '../images/home-at-night.jpg';

const HomeSongs = (props) => {

  return (
    <div className="home-songs" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '60%', margin: '1rem auto', padding: '0.75rem', borderRadius: '0.5rem'}}>
            <h1 style={{textAlign: 'center', margin: '0.25rem auto', color: 'white', fontWeight: 'bold'}}>Songs About Home</h1>
            <div style={{ color: '#799E88'}}>
            <p style={{ fontSize: '1.25rem'}}>Mid pleasures and palaces though we may roam</p>
            <p style={{ fontSize: '1.25rem'}} >   Be it ever so humble, there's no place like home</p>
            <p style={{ fontSize: '1.25rem'}}>    A charm from the skies seems to hallow us there</p>
            <p style={{ fontSize: '1.25rem'}}>   Which seek thro' the world, is ne'er met elsewhere</p>
            <p style={{ fontSize: '1.25rem'}}>   Home! Home!</p>
            <p style={{ fontSize: '1.25rem'}}>   Sweet, sweet home!</p>
            <p style={{ fontSize: '1.25rem'}}>   There's no place like home</p>
            <p style={{ fontSize: '1.25rem'}}>   There's no place like home!</p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', 'textAlign' : 'right', paddingRight: '1rem'}}>-- John Howard Payne</p>
            </div>
        </div>
        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/3SwlZQ5Sqyxjq2iVzXH4re?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
       
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '50%', margin: '0.75rem auto', padding: '1rem', borderRadius: '0.5rem'}}>
            <img
                src={HomePhoto}
                alt="house at nighttime"
                style={{ borderRadius: '3%' }}
            />
        </div>
    </div>
  );
};

export default HomeSongs;