import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TurnState } from './turnState';


export function YellowMove(props) {
  const [turn, setTurn] = React.useState(props.TurnState)

    function yellowTurn(column){
      localStorage.setItem('turn', 'red')
      props.onYellowTurn();
    }
  
    return (
        <div>
        <div className="alert alert-primary fontsizer">Click the column button where you want to drop your piece!</div>
        <button onClick={() => yellowTurn("A")} type="button" className="btn btn-primary btn-lg">A</button>
        <button onClick={() => yellowTurn("B")} type="button" className="btn btn-primary btn-lg">B</button>
        <button onClick={() => yellowTurn("C")} type="button" className="btn btn-primary btn-lg">C</button>
        <button onClick={() => yellowTurn("D")} type="button" className="btn btn-primary btn-lg">D</button>
        <button onClick={() => yellowTurn("E")} type="button" className="btn btn-primary btn-lg">E</button>
        <button onClick={() => yellowTurn("F")} type="button" className="btn btn-primary btn-lg">F</button>
        <button onClick={() => yellowTurn("G")} type="button" className="btn btn-primary btn-lg">G</button>
        </div>
    );
}