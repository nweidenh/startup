import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TurnState } from './turnState';


export function YellowMove(props) {

    function yellowTurn(column){
      localStorage.setItem('turn', 'red')
      props.onYellowTurn(column);
    }
  
    return (
        <div>
        <div className="alert alert-primary fontsizer">Click the column button where you want to drop your piece!</div>
        <button onClick={() => yellowTurn("a")} type="button" className="btn btn-primary btn-lg">A</button>
        <button onClick={() => yellowTurn("b")} type="button" className="btn btn-primary btn-lg">B</button>
        <button onClick={() => yellowTurn("c")} type="button" className="btn btn-primary btn-lg">C</button>
        <button onClick={() => yellowTurn("d")} type="button" className="btn btn-primary btn-lg">D</button>
        <button onClick={() => yellowTurn("e")} type="button" className="btn btn-primary btn-lg">E</button>
        <button onClick={() => yellowTurn("f")} type="button" className="btn btn-primary btn-lg">F</button>
        <button onClick={() => yellowTurn("g")} type="button" className="btn btn-primary btn-lg">G</button>
        </div>
    );
}