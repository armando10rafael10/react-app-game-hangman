import React from 'react';
import './Keyboard_HangMan.css';

function KeyboadHangMan(props){
    return (
            <div className="letter-container">
                <div className="button-letter-container">
                        {props.Alphabet.map( (i) =>{
                            return <button key={i} className="button-letter"
                                    id={i} onClick={props.HandleLetter}
                                    >{i}</button>;
                        })}
                </div>
            </div>
    );
}
export default  KeyboadHangMan;