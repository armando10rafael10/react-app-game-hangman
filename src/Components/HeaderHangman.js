import React, {useEffect,useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReply} from '@fortawesome/free-solid-svg-icons';
import {faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import {faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import './HeaderHangman.css';

function HeaderHangman(props){
    const [audioHidden,SetHiddenAudio] = useState(false);
    const [seeMore, HandleSeeMore] = useState(false);
    
    useEffect(() => {
        console.log("----------------------------componentDidMount HEADER----------------------------------");                
        return () => {
            console.log("-------------------------componentWillUnmount HEADER--------------------------------");
        }
    }, []);

    function ChangeButtonMore(){
        HandleSeeMore(!seeMore);
    }

    function SoundPlay(){
        SetHiddenAudio(!audioHidden);
        props.playAudio();
    }

    function SoundPause(){
        SetHiddenAudio(!audioHidden);
        props.pauseAudio();
    }

    return(
        <div className="game-hangman-container">
                <div className="button-game-hangman">
                    <button className="button-game-hangman-color"
                            title="return to main start"
                            onClick={props.HandleInitGame}>
                                <FontAwesomeIcon icon={faReply}
                                                 className="button-game-hangman-font">
                                </FontAwesomeIcon>
                    </button>
                </div>
                <div className="title-game-hangman">
                    <h5>{props.title}</h5>
                </div>
                {seeMore? 
                        <div className="hidden-dates-hangman">
                            <div>correct score <div>{props.max}</div> </div>
                            <div>wrong score <div>{props.min}</div> </div>
                        </div>
                    : <div className="hidden-dates-hangman"></div>
                }
                <div className="button-hidden-hangman">
                    <button onClick={ChangeButtonMore}>
                        {seeMore? <h2>-</h2> : <h2>+</h2>}
                    </button>
                </div>
                <div className="button-hidden-audio">
                    <button onClick={SoundPause} 
                            hidden={audioHidden}
                            className="button-sound-mute">
                        <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
                    </button>
                    <button onClick={SoundPlay} 
                            hidden={!audioHidden}
                            className="button-sound-up">
                        <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="times-open-hangman">
                    <h2>current<br/>level <div>{props.open}</div></h2>
                </div>

        </div>
    );
}
export default HeaderHangman;