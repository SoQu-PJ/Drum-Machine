import React from "react";
import '../App.css';


const SoundPanel = props => {
    const volumeHandler = e =>{
        props.setVolume(e.target.value);
        props.setMonitorValue(`Volume: ${props.volume}`);
        
    }

    const powerHandler = e => {
        document.querySelector(".power").checked ? props.setPower(true) : props.setPower(false);
        
        if(props.power)
            props.setMonitorValue("");
    }

    return(
        <section className="sound-panel">
            <label className="switch">
            <h4>Power</h4>  
                <input className="power" type="checkbox" onClick={powerHandler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            
            <div id="display" className="monitor">{props.power ? props.monitorValue : ""}</div>

            <div className="sound-volume-box">
                <h4>Volume</h4>
                <input className="sound-volume" type="range" min="0" max="100" value={props.volume} onChange={volumeHandler} disabled={!props.power}/>
            </div>
        </section>
    )
}

export default SoundPanel;