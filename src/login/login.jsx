import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({Username, authState, onAuthChange}) {

  return (
    <main className="container-fluid">
    <div className="p-3"><h1 className="white-bold-text">This is Connect 4</h1>
    <h4 className="white-bold-text">The ultimate test of strategy and wits</h4>
    <img className= "p-3" src="Connect 4 Box.jpg" alt="Connect 4 Box" width="300" height="auto" />
    {authState === AuthState.Authenticated && (
      <Authenticated Username={Username} onLogout= {() => onAuthChange(Username, AuthState.Unauthenticated)} />
    )}
    {authState === AuthState.Unauthenticated && (
      <Unauthenticated Username={Username} onLogin={(loginUser) => {onAuthChange(loginUser, AuthState.Authenticated)}} />
    )}
    </div>
    {/*<form action="play">
    <div><h3 className="white-bold-text p-3">To play a game, please login below:</h3></div>
        <div className="input-group custom-padding">
            <span className="input-group-text">Username:</span>
            <input className="form-control" type="text" id="text" name="varText" placeholder="Username" onChange={userChange}/>
        </div>
        <div className="input-group custom-padding">
            <span className="input-group-text">Password: </span>
            <input className="form-control" type="password" id="password" name="varPassword" placeholder="Password" onChange={passwordChange}/>
        </div>
            <button onClick={loginUser} type="submit" className="btn btn-primary">Login</button>
    </form>
  <br />*/}
</main>
  );
}