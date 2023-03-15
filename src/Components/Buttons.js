import React, {useEffect} from "react";
import "../App.css";
import sound from "./sound.json";

import Q from "../Sound/Heater-1.mp3";
import W from "../Sound/Heater-2.mp3";
import E from "../Sound/Heater-3.mp3";
import A from "../Sound/Heater-4_1.mp3";
import S from "../Sound/Heater-6.mp3";
import D from "../Sound/Dsc_Oh.mp3";
import Z from "../Sound/Kick_n_Hat.mp3";
import X from "../Sound/RP4_KICK_1.mp3";
import C from "../Sound/Cev_H2.mp3";


const Buttons = props => {
    const buttonHandler = e =>{ 
        for(const property in sound){
            if(e.target.id === property){
                e.target.children[0].play()
            }
        }

        props.setMonitorValue(sound[e.target.id]);
    }
    
    useEffect(()=>{
        const allButtons = document.querySelectorAll(".drum-pad");
        const audio = document.querySelectorAll(".audio-control");

        allButtons.forEach(el => {
            el.disabled = !props.power;

            el.addEventListener("click", buttonHandler);
            return () => el.removeEventListener("click", buttonHandler);
        })

        audio.forEach(el => el.volume = props.volume / 100);
    });

    return(
    <section className="sound-button">
        <button id="Q" className="drum-pad">
        <audio className="audio-control">
            <source src={Q}></source>
        </audio>
        Q
        </button>
        <button id="W" className="drum-pad">
        <audio className="audio-control">
            <source src={W}></source>
        </audio>
        W</button>
        <button id="E" className="drum-pad">
        <audio className="audio-control">
            <source src={E}></source>
        </audio>
        E</button>
        <button id="A" className="drum-pad">
        <audio className="audio-control">
            <source src={A}></source>
        </audio>
        A</button>
        <button id="S" className="drum-pad">
        <audio className="audio-control">
            <source src={S}></source>
        </audio>
        S</button>
        <button id="D" className="drum-pad">
        <audio className="audio-control">
            <source src={D}></source>
        </audio>
        D</button>
        <button id="Z" className="drum-pad">
        <audio className="audio-control">
            <source src={Z}></source>
        </audio>
        Z</button>
        <button id="X" className="drum-pad">
        <audio className="audio-control">
            <source src={X}></source>
        </audio>
        X</button>
        <button id="C" className="drum-pad">
        <audio className="audio-control">
            <source src={C}></source>
        </audio>
        C</button>
    </section>
    )
}

export default Buttons;