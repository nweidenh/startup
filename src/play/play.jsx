import React from 'react';
import './play.css';

import { Notifications } from './notifications';
import { Gameplay } from './gameplay';

export function Play(props) {

  return (
    <main className="container-fluid">
        <Notifications Username = {props.Username} />
        <Gameplay Username = {props.Username} />
        </main>
  );
}