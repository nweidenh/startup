import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TurnState } from './turnState';


export function redMove(props) {
    const navigate = useNavigate();

    function redTurn(){

    }
  
    return (
        <div>
        <div className="alert alert-primary fontsizer">Wait for Red to go</div>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>A</button>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>B</button>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>C</button>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>D</button>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>E</button>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>F</button>
        <button type="button" className="btn btn-primary btn-lg" disabled={true}>G</button>
        </div>
    );
}