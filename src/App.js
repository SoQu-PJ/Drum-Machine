import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import SoundPanel from './Components/SoundPanel';

function App() {
  return (
    <main id="drum-machine">
      {/* <div id="display"></div> */}
      <Buttons/>
      <SoundPanel/>
    </main>
  );
}

export default App;
