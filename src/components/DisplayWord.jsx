import React, { useState } from 'react';

function DisplayWord(props) {
  return (
    <div 
      className="game-box__word"
      style={{color: props.color}}
    >{props.word}</div>
  )
}

DisplayWord.defaultProps = {
  color: 'black'
}

export default DisplayWord;