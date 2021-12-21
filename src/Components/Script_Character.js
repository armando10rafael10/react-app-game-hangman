import React from 'react';
import './Script_Character.css';

function ScriptCharacter(props){
    return (
        <div className="script-character-container">
            { props.linesVerb.map((x,index)=>{
                return(
                    <div className="script-character" 
                        key={index}>{x}
                    </div>
                );
            }) }
        </div>
    );
}
export default ScriptCharacter;