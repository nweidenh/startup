import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TurnState } from './turnState';


export function RedMove(props) {
    const columnHeaders = ['a','b','c','d','e','f','g']

    function redTurn(){
        localStorage.setItem('turn', 'yellow')
        const columnIndex = Math.floor(Math.random() * columnHeaders.length);
        props.onRedTurn(columnHeaders[columnIndex]);
    }
  
    return (
        <div>
        <div className="alert alert-primary fontsizer">It is the Computer's Turn</div>
        <button onClick={() => redTurn()} type="button" className="btn btn-primary btn-lg">Click Here To See The Computer's Move</button>
        </div>
    );
}