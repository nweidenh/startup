import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const navigate = useNavigate();

  function loginUser(){
    localStorage.setItem('Username', Username);
    localStorage.setItem('Password', Password)
    setUsername = Username;
  }

  function userChange(e){
    setUsername(e.target.value);
  }

  function passwordChange(e){
    setPassword(e.target.value);
  }

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
            <input className="form-control" type="text" id="text" name="varText" placeholder="Username" onChange={userChange}/>
        </div>
        <div className="input-group custom-padding">
            <span className="input-group-text">Password: </span>
            <input className="form-control" type="password" id="password" name="varPassword" placeholder="Password" onChange={passwordChange}/>
        </div>
            <button onClick={loginUser} type="submit" className="btn btn-primary">Login</button>
    </form>
    <br />
</main>
  );
}