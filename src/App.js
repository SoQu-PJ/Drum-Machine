import React, {useState} from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import SoundPanel from './Components/SoundPanel';

function App() {
  const [power, setPower] = useState(true);

  return (
    <main id="drum-machine">
      {/* <div id="display"></div> */}
      <Buttons power={power}/>
      <SoundPanel power={power} setPower={setPower}/>
    </main>
  );
}

export default App;
