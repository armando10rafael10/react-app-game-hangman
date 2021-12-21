import React,{useState,useEffect} from 'react';
import Juego from '../game/Juego';
import ImgHangMan from './Img_HangMan';
import KeyboadHangMan from './Keyboard_HangMan';
import DatesHangman from './Dates_Hangman';
import HeaderHangman from './HeaderHangman';
import Swal from 'sweetalert2';
import './CompGameStart.css';

function CompGameStart(props){    

    const [state,SetState] = useState({
        init : false
    });

    useEffect(() => {
        console.log("----------------------------componentDidMount GAME----------------------------------");        
        Juego.SetScoreByLevels();//basic default
        props.addClassBarProgress(); //set class to progressbar default
        console.log("datesUsedLastGame: " +Juego.objeto);
        SetState({
           init : false
        });
        playSoundMain();
        return () => {
           console.log("-------------------------componentWillUnmount GAME--------------------------------");
           SetState({
                init : true
           });
        };
    }, []);

    function checkAllLevels(){
        if( Juego.nameLevel == "basic" ){
            props.restartValuesForLevels("basic");
        }
        if( Juego.nameLevel == "normal" ){
            props.restartValuesForLevels("normal");
        }
        if( Juego.nameLevel == "difficult" ){
            props.restartValuesForLevels("difficult");
        }
        if( Juego.nameLevel == "hardcore" ){
            props.restartValuesForLevels("hardcore");
        }
        if( Juego.nameLevel == "ultraHardcore" ){
            props.restartValuesForLevels("ultraHardcore");
        }
        if( Juego.nameLevel == "God" ){
            props.restartValuesForLevels("God");
        }
    }
    function alertGameWon(){
        props.MessageAlert("win the game","Winner","toast-top-left","success");
        Swal.fire({
            title: '!!Congragulation!!',
            html: "<h6 class='errors-swal'>attempts errors : "+Juego.countAttemptError.toString()+"</h6>"+"<h6 class='tries-swal'>attempts tries : "+Juego.countAttemptTries.toString()+"</h6>"+"<h6 class='score-swal'>accumulated score: "+Juego.score+" pts</h6>",
            imageUrl: 'https://i.ibb.co/FgXqz7N/congragulation.png',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'congragulation',
            footer : "",
            toast:false,
            reverseButtons: true,
            focusCancel: true,
            showCloseButton:false,
            backdrop: "radial-gradient(circle, rgba(8,8,8,1) 5%, rgba(0,0,0,0.8542252444149403) 100%)",
            background: '#FFFFC4',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: true,
            confirmButtonColor: '#239B56',
            confirmButtonText: `continue playing?`,
            showDenyButton: true,
            denyButtonText: `exit`,
            denyButtonColor: '#d33',
          }).then((result) => {
            if(result.isConfirmed) {
                props.MessageAlert("return to play","","toast-top-left","success");
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/GM3pXDM/loading.gif',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    timer: 1000,
                    showConfirmButton: false,
                    showCancelButton: false,
                    showDenyButton:false,
                    titleText : 'return to play again..!!',
                    background : '#e5eff1'
                });
                Juego.SetCountOpenGame();
                Juego.SetScoreByLevels();
                checkAllLevels();
                props.addClassBarProgress(); //set class to progressbar
                SetState({
                    init : false
                });
            }else if (result.isDenied) {
                //exiting the game
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/m8n9CXj/Ellipsis-1-6s-200px.gif',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    timer: 1000,
                    showConfirmButton: false,
                    showCancelButton: false,
                    showDenyButton:false,
                    titleText : 'Exiting the game..!!',
                    background : '#e5eff1'
                });
                Juego.AddScoreToList();
                Juego.ClearScore();
                Juego.CleanCountOpenGame();
                Juego.restartMaxCount();
                props.handleInitGame();//exiting the game
                SetState({
                    init : true
                });
            }
        });
    }
    function alertGameOver(){
        props.MessageAlert("you loser your attempts","","toast-top-left","info");
        Swal.fire({
            html: "<img src='https://i.ibb.co/dj3VSqk/death-Hangman-removebg-preview-1.png' width='170px' height='150px'/><h1 class='title-swal'>!!I'm sorry the verb was : "+Juego.verbo+"("+Juego.verbInSpanish+")!!</h1>  <h5 class='errors-swal'>attempts errors : "+Juego.countAttemptError.toString()+"</h5>"+"<h5 class='tries-swal'>attempts tries : "+Juego.countAttemptTries.toString()+"</h5>"  +  "<h5 class='score-swal'>score obtained : "+Juego.score.toString()+"</h5>",
            footer : "",
            toast:false,
            reverseButtons: true,
            focusCancel: true,
            showCloseButton:false,
            backdrop: "radial-gradient(circle, rgba(8,8,8,1) 5%, rgba(0,0,0,0.8542252444149403) 100%)",
            background: '#FFFFC4',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: true,
            confirmButtonColor: '#239B56',
            confirmButtonText: `play again`,
            showDenyButton: true,
            denyButtonText: `exit game`,
            denyButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                    props.MessageAlert("return to play","","toast-top-left","success");
                    Swal.fire({
                        imageUrl: 'https://i.ibb.co/GM3pXDM/loading.gif',
                        imageWidth: 200,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        timer: 1000,
                        showConfirmButton: false,
                        showCancelButton: false,
                        showDenyButton:false,
                        titleText : 'return to play again..!!',
                        background : '#e5eff1'
                    });
                    Juego.AddScoreToList();
                    Juego.ClearScore();
                    Juego.CleanCountOpenGame();
                    Juego.SetScoreByLevels();//basic
                    props.clearClassBarProgress();//clear bar progress css
                    props.addClassBarProgress(true);

                    props.restartValuesGame();
                    SetState({
                        init : false
                    });
            }else if (result.isDenied) {
                    Swal.fire({
                        imageUrl: 'https://i.ibb.co/m8n9CXj/Ellipsis-1-6s-200px.gif',
                        imageWidth: 200,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        timer: 1000,
                        showConfirmButton: false,
                        showCancelButton: false,
                        showDenyButton:false,
                        titleText : 'Exiting the game..!!',
                        background : '#e5eff1'
                    });
                    Juego.AddScoreToList();
                    Juego.ClearScore();
                    Juego.CleanCountOpenGame();
                    props.handleInitGame();//exiting the game
                    Juego.restartMaxCount();
                    
                    SetState({
                        init : true
                    });
            }
        });
    }
    function getPositionsLetters(id){
        //Get posicion
        var positionLetters = [];
        for (const r in Juego.verbo) {
            if(Juego.verbo[r]==id.toLowerCase()){
                positionLetters.push(r);
            }
        }
        return positionLetters;
    }
    function restartGame(){
        //resign if you lose
        if(Juego.emptyLifes()){
            alertGameOver();
            document.getElementById("soundLost").play(); 
        }
    }
    function checkLetter(positionLetters, id){
        //empty
        if(positionLetters.length == 0){
            document.getElementById("soundError").play(); 
            document.getElementById("soundError").volume=0.6;  
            console.log("the letter is not there");
            Juego.RemoveLife();
            Juego.SetCountAttemptsErrors();
            Juego.ChangeImgHangman();
            Juego.SetScore(false);
            SetState({
                init : false
            });
        }else{
            document.getElementById("soundClick").play();
            document.getElementById("soundClick").volume=0.6; 
            console.log("the letter is there");
            Juego.SetCountAttemptsTries();
            for(let s in positionLetters){
                Juego.ListLinesVerb[positionLetters[s]] = id.toLowerCase();
            }
            Juego.SetScore(true);
            SetState({
                init : true
            });
        }
    }
    function checkWinner(){
        //finish, if win
        if(Juego.CheckSameWords()){
            document.getElementById("soundWinner").play(); 
            alertGameWon();//its going to alert
            console.log("has won");
        }else{
            console.log("has lost");
        }
    }
    function HandleLetter(e){
        var id = e.target.id.toLowerCase();
        console.log("list of ids: "+Juego.ListAllIdOpacity);

        if( Juego.AddListAllIdOpacity(id.toUpperCase()) ){
            console.log("clicked on :"+id)
            props.opacityLetter(id);
            checkLetter( getPositionsLetters(id) , id);
            Juego.SetCountAttemptsTotally();
            restartGame();
            checkWinner();
        }else{
            props.MessageAlert("previously clicked","","toast-top-left","warning");
            props.pushAlertRepeatLetter(id);
            setTimeout(function(){ 
                console.log("previously clicked");
                props.deleteAlertRepeatLetter(id);
            }, 1800);
        }
    }
    function PlayAudio(){
        document.getElementById("soundMain").play();
        console.log("played music");
    }
    function PauseAudio(){
        document.getElementById("soundMain").pause();
        console.log("paused music");
    }
    function playSoundMain(){
        document.getElementById("soundMain").play();
        document.getElementById("soundMain").volume=0.06;
        document.getElementById("soundMain").loop=true;
    }

    return(
        <div className="game-hangman">
            <HeaderHangman HandleInitGame={props.handleInitGame} 
                            title={"HANG -- MAN"}
                            open={Juego.countOpenGame}
                            max={Juego.ScoreMax}
                            min={Juego.ScoreMin}
                            name={Juego.nameLevel}
                            playAudio={PlayAudio}
                            pauseAudio={PauseAudio}
                        />
            <DatesHangman lifes={Juego.ListLifes}
                          countErrors={Juego.countAttemptError}
                          countTotal={Juego.countAttemptTotally}
                          countTries={Juego.countAttemptTries}
                          score={Juego.score}
                          nameType={Juego.TypeVerbName}
                        />
            <ImgHangMan lifes={Juego.upMoveImg} 
                        ListLinesVerb={Juego.ListLinesVerb}
                        verboImage={Juego.verbo}
                        typeLevel={Juego.typeLevel}
                        />
            <KeyboadHangMan Alphabet={Juego.Alphabet} 
                            HandleLetter={HandleLetter}
                        />
            <div>
                <audio id="soundError" src={`assets/ringtone/error.mp3`}/>
                <audio id="soundClick" src={`assets/ringtone/ding.mp3`}/>
                <audio id="soundWinner" src={`assets/ringtone/winner.mp3`}/>
                <audio id="soundLost" src={`assets/ringtone/gameover.mp3`}/>
                <audio id="soundMain" src={`assets/ringtone/alan-walker-alone-instrumental.mp3`}/>
            </div>
            
        </div>
    );
}
export default CompGameStart;