import React from 'react';
import './Img_To_Show.css';

function ImgToShow(props){
    function Sound(){
        document.getElementById("sonido").play();
    }
    return (
        <div className="img-toShow-container">
            <audio id="sonido" src={`assets/sounds/${props.verbo}.mp3`}/>
            <div className="container">
                <button onClick={Sound} className="container-icon">
                    <img className="icon"
                        src={`assets/images/verbsIrregulars/${props.verbo}.jpg`} 
                        alt={"verb"}
                        id={"00"+props.verbo+"00"}
                        title={"press to hear the pronunciation"}/>
                </button>
            </div>
        </div>
    );
}
export default ImgToShow;