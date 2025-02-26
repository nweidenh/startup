import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TurnState } from './turnState';


export function yellowMove(props) {
    const navigate = useNavigate();

    function yellowTurn(){

    }
  
    return (
        <div>
        <div className="alert alert-primary fontsizer">Click the column button where you want to drop your piece!</div>
        <button type="button" className="btn btn-primary btn-lg">A</button>
        <button type="button" className="btn btn-primary btn-lg">B</button>
        <button type="button" className="btn btn-primary btn-lg">C</button>
        <button type="button" className="btn btn-primary btn-lg">D</button>
        <button type="button" className="btn btn-primary btn-lg">E</button>
        <button type="button" className="btn btn-primary btn-lg">F</button>
        <button onClick={() => logout()} type="button" className="btn btn-primary btn-lg" disabled={turnState = TurnState.Red}>G</button>
        </div>
    );
}