import React, {useEffect} from "react";
import {Howl} from 'howler';
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
        const target = e.target.id;
        const songArray = {
            "Q": Q,
            "W": W,
            "E": E,
            "A": A,
            "S": S,
            "D": D,
            "Z": Z,
            "X": X,
            "C": C
        }

        
        for(const property in sound){
            if(target === property){
                const audio = new Howl({
                    src: [songArray[target]],
                    volume: props.volume
                });
                audio.play();
            }
        }

        props.setMonitorValue(sound[target]);
    }
    
    useEffect(()=>{
        const allButtons = document.querySelectorAll(".drum-pad");

        allButtons.forEach(el => {
            el.disabled = !props.power;


            el.addEventListener("click", buttonHandler);
            return () => el.removeEventListener("click", buttonHandler);
        })
    });

    return(
    <section className="sound-button">
        <button id="Q" className="drum-pad">Q</button>
        <button id="W" className="drum-pad">W</button>
        <button id="E" className="drum-pad">E</button>
        <button id="A" className="drum-pad">A</button>
        <button id="S" className="drum-pad">S</button>
        <button id="D" className="drum-pad">D</button>
        <button id="Z" className="drum-pad">Z</button>
        <button id="X" className="drum-pad">X</button>
        <button id="C" className="drum-pad">C</button>
    </section>
    )
}

export default Buttons;