import React from 'react';
import './App.css';

function App() {
  return (
    <div className="game">
      <h1 className="game-title">색깔 맞추기</h1>
      <p className="game-description">아래 단어의 색깔이 위에 쓰여진 글자와 일치하나요?</p>
      <div className="game-box">
        <div className="game-box__screen">
          <img className="game-box__answer game-box__answer--right" src={require("./correct.png")} alt="correct-img"/>                
          <img className="game-box__answer game-box__answer--wrong" src={require("./cancel.png")} alt="correct-img"/>                
        </div>
        <div className="game-box__word">빨강</div>
        <div className="game-box__word">파랑</div>
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

export default App;
