import React from 'react';

export function Login() {
  return (
    <main className="container-fluid">
    <div className="p-3"><h1 class="white-bold-text">This is Connect 4</h1>
    <h4 className="white-bold-text">The ultimate test of strategy and wits</h4>
    </div>
    <img className= "p-3" src="Connect 4 Box.jpg" alt="Connect 4 Box" width="300" height="auto" />
    <form action="play">
    <div><h3 className="white-bold-text p-3">To play a game, please login below:</h3></div>
        <div className="input-group custom-padding">
            <span className="input-group-text">Username:</span>
            <input className="form-control" type="text" id="text" name="varText" placeholder="Username"/>
        </div>
        <div className="input-group custom-padding">
            <span className="input-group-text">Password: </span>
            <input className="form-control" type="password" id="password" name="varPassword" placeholder="Password"/>
        </div>
            <button type="submit" className="btn btn-primary">Login</button>
    </form>
    <br />
</main>
  );
}