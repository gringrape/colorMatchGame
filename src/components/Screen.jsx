import React from 'react';

function Screen(props) {
  return (
    <div className="game-box__screen">
      <img 
        className="game-box__answer" 
        src={require(`../images/${props.status}.png`)} 
        alt={`${props.status}-img`}
      />                        
    </div>
  );
}

export default Screen;