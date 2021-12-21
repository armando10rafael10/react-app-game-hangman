import React,{ useState, useEffect } from 'react';
import CompGameStart from './CompGameStart';
import Juego from '../game/Juego';
import CompInitialGame from './CompInitialGame';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import '../../node_modules/toastr/nuget/content/content/toastr.css';
import './Main_Menu.css';

function Comp_Menu(){
    const [clickStart, SetInitStart] = useState(false);

    useEffect(() => {
        console.log("------------------------componentDidMount MAIN MENU--------------------------------------");
        return () => {
          console.log("----------------------componentWillUnmount MAIN MENU-----------------------------------");
          SetInitStart(false);
        };
    }, []);

    function exitTheGameAlert(){
        MessageAlert("exiting the game :(","","toast-top-right","warning");
        Swal.fire({
            imageUrl: 'https://i.ibb.co/m8n9CXj/Ellipsis-1-6s-200px.gif',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer: 1500,
            showConfirmButton: false,
            showCancelButton: false,
            showDenyButton:false,
            titleText : 'Exiting the game..!!',
            background : '#e5eff1'
        });
    }
    function MessageAlert(message,title,dirrection,type){
        if(type==="warning"){
            toastr.options = {
                "closeButton": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": dirrection,
                "preventDuplicates": true,
                "showDuration": "500",
            }
            toastr.warning(message,title);
        }
        if(type==="success"){
            toastr.options = {
                "closeButton": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": dirrection,
                "preventDuplicates": true,
                "showDuration": "500"
            }
            toastr.success(message,title);
        }
        if(type==="info"){
            toastr.options = {
                "closeButton": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": dirrection,
                "preventDuplicates": true,
                "showDuration": "500"
            }
            toastr.info(message,title);
        }
    }
    function restartClasses(){
        if(Juego.ListAllIdOpacity.length === 0){
            console.log("it's empty the list id, delete");
        }else{
            console.log("it isn't empty the list id, delete");
            for(let x in Juego.ListAllIdOpacity){
                let id = Juego.ListAllIdOpacity[x];
                document.getElementById(id).classList.remove(Juego.styleOpacityButton);
                document.getElementById(id).classList.remove(Juego.styleAlertButton);
            }
        }
    }
    function opacityLetters(id){
        document.getElementById(id.toUpperCase()).classList.add(Juego.styleOpacityButton);
    }
    function pushAlertRepeatLetters(id){
        document.getElementById(id.toUpperCase()).classList.add(Juego.styleAlertButton);
    }
    function deleteAlertRepeatLetters(id){
        document.getElementById(id.toUpperCase()).classList.remove(Juego.styleAlertButton);
    }
    function restartValueGame(){
        // console.log("you have lost and consumed your attempts");
        restartClasses();
        Juego.restartValues();
        Juego.FullListLife();
        Juego.GetVerbRandom();
    }
    function restartValuesForLevels(level){
        let b = Juego.valuesDefault.basic.modeName;
        let n = Juego.valuesDefault.normal.modeName;
        let d = Juego.valuesDefault.difficult.modeName;
        let h = Juego.valuesDefault.hardcore.modeName;
        let uh = Juego.valuesDefault.ultrahardcore.modeName;
        let g = Juego.valuesDefault.god.modeName;
        
        if(level===b || level===n || level===d || level===h || level===uh || level===g ){
            console.log("CHANGING LEVEL "+level.toUpperCase());
            restartValueGame();
        }
    }
    function addClassBarProgress(default_Value){
        if( Juego.nameLevel === Juego.valuesDefault.basic.modeName || default_Value === true){
            document.getElementById("level_b").classList.add("basic-color");
        }
        if( Juego.nameLevel === Juego.valuesDefault.normal.modeName ){
            document.getElementById("level_n").classList.add("normal-color");
        }
        if( Juego.nameLevel === Juego.valuesDefault.difficult.modeName ){
            document.getElementById("level_d").classList.add("difficult-color");
        }
        if( Juego.nameLevel === Juego.valuesDefault.hardcore.modeName ){
            document.getElementById("level_h").classList.add("hardcore-color");
        }
        if( Juego.nameLevel === Juego.valuesDefault.ultrahardcore.modeName ){
            document.getElementById("level_u_h").classList.add("ultraHardcore-color");
        }
        if( Juego.nameLevel === Juego.valuesDefault.god.modeName ){
            document.getElementById("level_g").classList.add("god-color");
        }
    }
    function clearClassBarProgress(){
        if(document.getElementById("level_b").classList.contains("basic-color")){
            document.getElementById("level_b").classList.remove("basic-color");
        }
        if(document.getElementById("level_n").classList.contains("normal-color")){
            document.getElementById("level_n").classList.remove("normal-color");
        }
        if(document.getElementById("level_d").classList.contains("difficult-color")){
            document.getElementById("level_d").classList.remove("difficult-color");
        }
        if(document.getElementById("level_h").classList.contains("hardcore-color")){
            document.getElementById("level_h").classList.remove("hardcore-color");
        }
        if(document.getElementById("level_u_h").classList.contains("ultraHardcore-color")){
            document.getElementById("level_u_h").classList.remove("ultraHardcore-color");
        }
        if(document.getElementById("level_g").classList.contains("god-color")){
            document.getElementById("level_g").classList.remove("god-color");
        }
    }
    //-------------------------------------
    function cleanBeforeRestartValueGame(){
        console.log("clearing startup data");
        restartClasses();
        Juego.restartValues();
        Juego.FullListLife();
        Juego.GetVerbRandom();
    }
    function handleStartGame(){
        SetInitStart(true);
        cleanBeforeRestartValueGame();
        console.log("starting game")
    }
    function handleInitGame(){
        exitTheGameAlert();
        restartValueGame();
        SetInitStart(false);
        Juego.restartValuesAdditionalsToScore();
        Juego.restartMaxCount();//restaure the array for default of level
        console.log("after of update")
    }
    function HandleChangeTypeOfVerb(value){
        Juego.Listverbtype(value);
    }

    const start = <CompGameStart handleInitGame={handleInitGame}
                                 restartValuesGame={restartValueGame}
                                 opacityLetter={opacityLetters}
                                 pushAlertRepeatLetter={pushAlertRepeatLetters}
                                 deleteAlertRepeatLetter={deleteAlertRepeatLetters}
                                 MessageAlert={MessageAlert}
                                 restartValuesForLevels={restartValuesForLevels}
                                 clearClassBarProgress={clearClassBarProgress}
                                 addClassBarProgress={addClassBarProgress}
                 />;
    const home = <CompInitialGame handleStartGame={handleStartGame}
                                  HandleChangeTypeOfVerb={HandleChangeTypeOfVerb}
                                  MessageAlert={MessageAlert}
                                  datesUsedLastGame={Juego.objeto}
                 />;

    return(
        <div className="main-container">
            {clickStart? start : home}
        </div>
    );
}

export default Comp_Menu;