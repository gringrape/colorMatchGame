import React, { useState } from 'react';
import './App.css';
import colorRepo from '../../colorRepo';
import utils from '../../utils';
import DisplayWord from '../DisplayWord';
import Footer from '../Footer';

function App() {
  // states
  const [upperWordNumber, setUpperWordNumber] = useState(3);
  const [lowerWordNumber, setLowerWordNumber] = useState(1);
  const [lowerColorNumber, setLowerColorNumber] = useState(3);

  // computation
  const upperWord = colorRepo.colorWords[upperWordNumber];
  const lowerWord = colorRepo.colorWords[lowerWordNumber];
  const lowerColor = colorRepo.colors[lowerColorNumber];

  return (
    <div className="game">
      <h1 className="game-title">색깔 맞추기</h1>
      <p className="game-description">아래 단어의 색깔이 위에 쓰여진 글자와 일치하나요?</p>
      <div className="game-box">
        <div className="game-box__screen">
          <img 
            className="game-box__answer game-box__answer--right" 
            src={require("../../images/correct.png")} 
            alt="correct-img"
          />                
          <img 
            className="game-box__answer game-box__answer--wrong" 
            src={require("../../images/cancel.png")} 
            alt="correct-img"
          />                
        </div>
        <DisplayWord word={upperWord} />
        <DisplayWord word={lowerWord} color={lowerColor} />
        <button className="game-box__btn">네</button>
        <button className="game-box__btn">아니오</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
