import React, { useState } from 'react';
import colorRepo from '../colorRepo';
import utils from '../utils';
import DisplayWord from './DisplayWord';
import Footer from './Footer';
import Screen from './Screen';

function Game(props) {
  // states
  const [upperWordNumber, setUpperWordNumber] = useState(utils.random(colorRepo.count));
  const [lowerWordNumber, setLowerWordNumber] = useState(utils.random(colorRepo.count));
  const [lowerColorNumber, setLowerColorNumber] = useState(utils.random(colorRepo.count));
  const [gameStatus, setGameStatus] = useState('playing');

  // computation
  const upperWord = colorRepo.colorWords[upperWordNumber];
  const lowerWord = colorRepo.colorWords[lowerWordNumber];
  const lowerColor = colorRepo.colors[lowerColorNumber];

  const checkAnswerIsEqual = (right) => {
    return () => {
      (upperWordNumber === lowerColorNumber) === right
        ? setGameStatus('win')
        : setGameStatus('lose');
      setTimeout(
        props.reset,
        400
      )
    }  
  }
  
  return (
    <div className="game">
      <h1 className="game-title">색깔 맞추기</h1>
      <p className="game-description">아래 단어의 색깔이 위에 쓰여진 글자와 일치하나요?</p>
      <div className="game-box">
        {
          gameStatus === 'playing'
            ? <></>
            : <Screen status={gameStatus} />
        }
        <DisplayWord word={upperWord} />
        <DisplayWord word={lowerWord} color={lowerColor} />
        <button className="game-box__btn" onClick={checkAnswerIsEqual(true)}>네</button>
        <button className="game-box__btn" onClick={checkAnswerIsEqual(false)}>아니오</button>
      </div>
      <Footer />
    </div>
  );
}

export default Game;