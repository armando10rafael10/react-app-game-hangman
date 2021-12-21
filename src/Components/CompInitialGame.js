import React ,{useEffect,useState} from 'react';
import Swal from 'sweetalert2';
import './CompInitialGame.css';
import Juego from '../game/Juego';
import Swall from 'sweetalert2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import {faVolumeUp} from '@fortawesome/free-solid-svg-icons';

function CompInitialGame(props){

    const [audioHidden,SetHiddenAudio] = useState(true);

    useEffect(() => {
        console.log("----------------------------componentDidMount INIT GAME----------------------------------");                
        defaultTypeVerbBasic();
        Message_Main();

        return () => {
            console.log("-------------------------componentWillUnmount INIT GAME--------------------------------");
        }
    }, []);

    function defaultTypeVerbBasic(){
        if(Juego.objScores.length === 3){
            var posThird = document.getElementById("third");
            posThird.style="border-radius: 0px 0px 20px 20px;border-bottom:2px solid blueviolet;";
        }else if(Juego.objScores.length === 2){
            var posTwo = document.getElementById("second");
            posTwo.style="border-bottom:1px solid blueviolet;border-top:1px solid blueviolet;";            
        }else if(Juego.objScores.length === 1){
            var posFirst = document.getElementById("first");
            posFirst.style="border-bottom:1px solid blueviolet;border-top:1px solid blueviolet;";
        }
        document.getElementById("basic-general").checked=true;
        console.log("configure for default level basic");
        props.HandleChangeTypeOfVerb(0);//defecto change verb basic
    }

    const stylesImgHangman = {
        background: 'url(assets/images/hangman/hangman_3.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }

    function alertChangeVerbByLetter(typeVerb){
        props.MessageAlert("change verbs for "+typeVerb+"...!!","","toast-top-left","info");
        
        Swal.fire({
            imageUrl: 'https://i.ibb.co/GM3pXDM/loading.gif',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer: 700,
            showConfirmButton: false,
            showCancelButton: false,
            showDenyButton:false,
            titleText : 'change verbs for '+typeVerb+'...!',
            background : '#e5eff1'
        });
    }

    function GetValueInput(event) {
        if(event.target.value === "basic"){
            props.HandleChangeTypeOfVerb(0);
            alertChangeVerbByLetter("basic")
            console.log("choose type general")
        }else if(event.target.value === "af"){
            props.HandleChangeTypeOfVerb(1);
            alertChangeVerbByLetter("a to f");
            console.log("choose type a-f");
        }else if(event.target.value === "gr"){
            props.HandleChangeTypeOfVerb(2);
            alertChangeVerbByLetter("g to r");
            console.log("choose type g-r");
        }else{
            props.HandleChangeTypeOfVerb(3);
            alertChangeVerbByLetter("s to z");
            console.log("choose type s-z");
        }   
    }

    function Message_Main(){
        Swall.fire({
            title: '!!Go to main of game?!!',
            imageWidth: 200,
            imageHeight: 100,
            footer : "",
            toast:false,
            reverseButtons: true,
            focusCancel: true,
            showCloseButton:false,
            backdrop: "radial-gradient(circle, rgba(8,8,8,1) 5%, rgba(0,0,0,0.8542252444149403) 100%)",
            background: '#C4E9FF',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: true,
            confirmButtonColor: '#1469B3',
            confirmButtonText: `let's go`
        })
        .then((result) => {
            if(result.isConfirmed) {
                var soundMain = document.getElementById("soundOne");
                soundMain.play();
                soundMain.volume=0.08;
                soundMain.loop=true;
            }
        });
    }

    function PlayAudio(){
        SetHiddenAudio(!audioHidden);
        document.getElementById("soundOne").play();
    }
    
    function PlayAudioT(){
        SetHiddenAudio(!audioHidden);
        document.getElementById("soundOne").pause();
    }

    return(
        <div className="init-game" style={stylesImgHangman}>
            <div id="wrapper">
                <h1>Hang Man</h1>
            </div>

            <div className="contain-init-game">
                
                <div className="contain-init-game-dates">                    
                    <div className="contain-dates">
                        <h1>Top Three Scores</h1>
                        <div className="best-scores">
                        {Juego.objScores.map((x)=>{
                            return(
                                <div key={x.id} 
                                     id={x.placePosName} 
                                     className="score-top-one">
                                    <div className="date-one">
                                        {x.placePos}
                                    </div> 
                                    <div className="date-two">
                                        {x.score} pts
                                    </div> 
                                    <div className="date-three">
                                        mode:{x.mode}
                                    </div> 
                                    <div className="date-four">
                                        type:{x.modeType}
                                    </div>
                                </div> 
                            );
                        })}     
                        </div>  
                    </div>
                </div>    

                <div className="contain-init-game-imgHangMan">
                    <img alt="img" 
                         title="hang-man"
                         src={`assets/images/hangman/${'hangman_2'}.jpg`}/>
                </div>    

                <div className="contain-init-game-inputs">
                    <div className="contain-inputs"> 
                        <div onChange={GetValueInput} 
                             className="inputs-type-verb">
                            <h1>Choose Mode</h1>
                            <div className="type-verb-basic">
                                <input value="basic" 
                                       id="basic-general" 
                                       name="level-verb" 
                                       type="radio" /> 
                                <label htmlFor="basic-general">
                                       ALL VERBS</label>
                            </div>
                            <div className="type-verb-af">
                                <input value="af" 
                                       id="basic-af" 
                                       name="level-verb" 
                                       type="radio" /> 
                                <label htmlFor="basic-af">
                                       VERBS BY A to F</label>
                            </div>
                            <div className="type-verb-gr">
                                <input value="gr" 
                                       id="basic-gr" 
                                       name="level-verb" 
                                       type="radio" /> 
                                <label htmlFor="basic-gr">
                                       VERBS BY G to R</label> 
                            </div>
                            <div className="type-verb-sz">
                                <input value="sw" 
                                       id="basic-sw" 
                                       name="level-verb" 
                                       type="radio" /> 
                                <label htmlFor="basic-sw">
                                       VERBS BY S to W</label> 
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="button-play-container">
                <button onClick={props.handleStartGame}
                        className="button-play">Play Start</button>
            </div>  

            <div className="contain-dates-hidden">
                <button onClick={PlayAudio} hidden={!audioHidden}
                    className="button-hidden-sound-play">
                    <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
                </button>
                <button onClick={PlayAudioT} hidden={audioHidden}
                    className="button-hidden-sound-pause">
                    <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
                </button>
                <audio id="soundOne" src={`assets/ringtone/intro.mp3`}/>
            </div>

        </div>
    )
}
export default CompInitialGame;
