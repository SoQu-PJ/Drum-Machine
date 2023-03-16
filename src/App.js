import React, {useState} from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import SoundPanel from './Components/SoundPanel';

function App() {
  const [monitorValue, setMonitorValue] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);

  return (
    <main id="drum-machine">
      <Buttons power={power} volume={volume} setMonitorValue={setMonitorValue}/>
      <SoundPanel power={power} setPower={setPower} volume={volume} setVolume={setVolume} monitorValue={monitorValue} setMonitorValue={setMonitorValue}/>
    </main>
  );
}

export default App;
