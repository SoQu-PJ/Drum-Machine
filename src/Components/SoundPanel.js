import React, {useState} from "react";
import '../App.css';


const SoundPanel = props => {
    const [monitorValue, setMonitorValue] = useState("");
    const [volume, setVolume] = useState(50); 

    const volumeHandler = e =>{
        setVolume(e.target.value);
        setMonitorValue(`Volume: ${volume}`);
    }

    const powerHandler = e => {
        document.querySelector(".power").checked ? props.setPower(true) : props.setPower(false);
    }

    return(
        <section className="sound-panel">
            <label className="switch">
            <h4>Power</h4>  
                <input className="power" type="checkbox" onClick={powerHandler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            
            <div className="monitor">{props.power ? monitorValue : ""}</div>

            <div className="sound-volume-box">
                <h4>Volume</h4>
                <input className="sound-volume" type="range" min="0" max="100" value={volume} onChange={volumeHandler} disabled={!props.power}/>
            </div>
        </section>
    )
}

export default SoundPanel;