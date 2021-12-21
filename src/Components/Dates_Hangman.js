import React ,{useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './DatesHangmanBar.css';
import './Dates_Hangman.css';

function DatesHangman(props){
    useEffect(() => {
        console.log("------------componentDidMount DATES-------------");        
        return () => {
           console.log("----------componentWillUnmount DATES-----------");
        };
    }, []);

    return (
        <div>            
            <div className="dates">
                <div className="dates-verb-type">
                    mode : {props.nameType}
                </div>
                <div className="dates-errors">
                    errors : {props.countErrors}
                </div>
                <div className="dates-totally">
                    totally : {props.countTotal}
                </div>
                <div className="dates-tries">
                    tries : {props.countTries}
                </div>
                <div className="dates-lifes"> 
                    <a title={props.lifes.length}>lifes : </a>
                    {props.lifes.map( (x,y)=>{
                        return <a key={y}>
                            <FontAwesomeIcon icon={faHeart}
                                className="lifes-icon-heart">
                            </FontAwesomeIcon>
                        </a>
                    })}
                    <div className="lifes-numb">{props.lifes.length}</div>
                </div>
                <div className="dates-bar-progress">
                    <div className="p-bar">
                          <div className="p-bar-basic" id="level_b">
                              basic</div>
                          <div className="p-bar-normal" id="level_n">
                              normal</div>
                          <div className="p-bar-difficult" id="level_d">
                              difficult</div>
                          <div className="p-bar-hardcore" id="level_h">
                              hardcore</div>
                          <div className="p-bar-ultra-hardcore" id="level_u_h">
                              ultra hardcore</div>
                          <div className="p-bar-god" id="level_g">
                              god</div>
                    </div>
                </div>              
                <div className="dates-score">
                    score : {props.score} pts
                </div>
            </div>
        </div>
    );
}
export default DatesHangman;