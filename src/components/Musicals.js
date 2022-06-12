import React from 'react';
import PianoPhoto from '../images/piano.jpg';

const Musicals = (props) => {

  return (
    <div className="musicals-without-words" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '60%', margin: '1rem auto', padding: '0.5rem', borderRadius: '0.5rem'}}>
            <h1 style={{textAlign: 'center', margin: '0.25rem auto', color: 'white', fontWeight: 'bold'}}>Wordless Selections from Musicals...</h1>
            <p style={{color: '#FFD73D', fontSize: '1.25rem'}}>...because sometimes words are too distracting!</p>
        </div>
        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/5UTk9VOS1FXJyTdbT1wRdE?utm_source=generator&theme=0" 
            width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
       
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '33%', margin: '0.75rem auto', padding: '1rem', borderRadius: '0.5rem'}}>
            <img
                src={PianoPhoto}
                alt="playing piano"
                style={{ borderRadius: '3%' }}
            />
        </div>
    </div>
  );
};

export default Musicals;