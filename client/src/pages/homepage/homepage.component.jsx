import React from 'react';
import Audio from '../../audio/Audio';

const Homepage = () => {
  const getMic = async () => {
    let stream = null;
    const constraints = { audio: true };

    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log('stream', stream);
      const source = Audio.createMediaStreamTrackSource(stream);
      const destination = Audio.createMediaStreamDestination();
    } catch (e) {
      console.log('err', e);
    }
  };

  return (
    <div className='home-container'>
      <button onClick={getMic}>Mic</button>
      <button>Play</button>
    </div>
  );
};

export default Homepage;
