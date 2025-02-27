import React from 'react';


export function GameEnd(props) {
    const columnHeaders = ['a','b','c','d','e','f','g']

    function gameEnd(){
        localStorage.setItem('turn', 'yellow')
        props.onGameEnd();
    }
  
    return (
        <div>
        <div className="alert alert-primary fontsizer">Game is Over</div>
        <button onClick={() => gameEnd()} type="button" className="btn btn-primary btn-lg">Click Here To Start a New Game</button>
        </div>
    );
}