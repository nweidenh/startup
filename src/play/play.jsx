import React from 'react';
import './play.css';

import { Notifications } from './notifications';
import { Gameplay } from './gameplay';
import { TurnState } from './turnState';

export function Play(props) {
  const [turnState, setTurnState] = React.useState(TurnState.Yellow);

  return (
    <main className="container-fluid">
        <Notifications Username = {props.Username} />
        <Gameplay Username = {props.Username} turnState = {TurnState.Yellow} />
        </main>
  );
}