import React, { useState } from 'react';
import './App.css';

function App() {
  // states
  const [upperWordNumber, setUpperWordNumber] = useState(3);
  const [lowerWordNumber, setLowerWordNumber] = useState(2);
  const [lowerColorNumber, setLowerColorNumber] = useState(3);

  // computation
  const upperWord = utils.colorWords[upperWordNumber];
  const lowerWord = utils.colorWords[lowerWordNumber];

  return (
    <div className="game">
      <h1 className="game-title">색깔 맞추기</h1>
      <p className="game-description">아래 단어의 색깔이 위에 쓰여진 글자와 일치하나요?</p>
      <div className="game-box">
        <div className="game-box__screen">
          <img className="game-box__answer game-box__answer--right" src={require("./correct.png")} alt="correct-img"/>                
          <img className="game-box__answer game-box__answer--wrong" src={require("./cancel.png")} alt="correct-img"/>                
        </div>
        <div className="game-box__word">{upperWord}</div>
        <div className="game-box__word" style={{color: utils.colors[lowerColorNumber]}}>{lowerWord}</div>
        <button className="game-box__btn">네</button>
        <button className="game-box__btn">아니오</button>
      </div>
      <footer className="footer">
        <p>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>
      </footer>
    </div>
  );
}

const colorRepo = {
  // colors 와 colorWords 는 index 가 같으면 같은 색을 의미해야 합니다.
  count: 7, 
  colorWords: ["빨강", "주황", "노랑", "초록", "파랑", "남색", "보라"],
  colors: ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
}

const utils = {
  random: () => {
    return Math.floor(Math.random() * this.count);
  }
}

export default App;
