import React from 'react';
import './Img_HangMan.css';
import ImgToShow from './Img_To_Show';
import ScriptCharacter from './Script_Character';

function ImgHangMan(props) {
	const styleBodyHangmanOne = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) 0px 0px'
	}
	const styleBodyHangmanTwo = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -145px 0px'
	}
	const styleBodyHangmanThree = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -286px 0px'
	}
	const styleBodyHangmanFour = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -434px 0px'
	}
	const styleBodyHangmanFive = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -577px 0px'
	}
	const styleBodyHangmanSix = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -718px 0px'
	}
	const styleBodyHangmanSeven = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) 3px 145px'
	}
	const styleBodyHangmanEight = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -141px 145px'
	}
	const styleBodyHangmanNine = {
		width: '160px', 
		height: '150px', 
		display: 'inline-block', 
		background: 'url(assets/images/hangman/hangman.png) -287px 145px'
	}
	const styleBodyHangmanTen = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -432px 145px'
	}
	const styleBodyHangmanEleven = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -575px 143px'
	}
	const styleBodyHangmanTwelve = {
		width: '160px',
		height: '150px',
		display: 'inline-block',
		background: 'url(assets/images/hangman/hangman.png) -717px 143px'
	}
	const ListImgHangman = [
		styleBodyHangmanOne, styleBodyHangmanTwo, styleBodyHangmanThree, styleBodyHangmanFour, styleBodyHangmanFive, styleBodyHangmanSix, 
		styleBodyHangmanSeven, styleBodyHangmanEight, styleBodyHangmanNine, styleBodyHangmanTen, styleBodyHangmanEleven, styleBodyHangmanTwelve
	];

	return (
		<div className="comp-img-hangman">
			<div className="Img-Hangman-Contain">
				<div className="img-hangman-flex">
					<div style={ListImgHangman[props.typeLevel[props.lifes]]}
						 className="img-hangman"
						 title="img-hangman"></div>
				</div>
			</div>
			<div className="Script-Character-Contain">
				<ScriptCharacter linesVerb={props.ListLinesVerb} />
			</div>
			<div className="Img-To-Show-Contain">
				<ImgToShow verbo={props.verboImage} />
			</div>
		</div>
	)
}

export default ImgHangMan; 