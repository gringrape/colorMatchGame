import React, { useState } from 'react';
import Game from './Game';

function ColorMatch() {
  const [key, setKey] = useState(0);
  const reset = () => {
    setKey(key + 1);
  }
  return (
    <Game key={key} reset={reset}/>
  );
}

export default ColorMatch;