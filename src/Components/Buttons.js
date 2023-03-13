import React, {useEffect} from "react";
import {Howl, Howler} from 'howler';
import "../App.css";
import sound from "./sound.json";
// import sound1 from "../Sound/Heater-1.mp3";


const Buttons = props => {

    // allButtons.forEach(el => el.disabled = !props.power);

    const buttonHandler = e =>{
        // for(const property in sound){
        //     if(e.target.id === property){
        //         const audio = new Howl({
        //             src: [import("../Sound/Heater-1.mp3")],
        //             html5: true,
        //             volume: 1.0
        //         });
                  
        //         audio.play();
        //     }
                
        // }
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