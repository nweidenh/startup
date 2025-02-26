import React from 'react';


export function Unauthenticated(props) {
    const [Username, setUsername] = React.useState(props.Username);
    const [Password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
  
    function loginUser(){
      localStorage.setItem('Username', Username);
      props.onLogin(Username)
    }
  
    function createUser(){
        localStorage.setItem('Username', Username);
        props.onLogin(Username)
    }
  
    return (
      <main className="container-fluid">
      {/*<div className="p-3"><h1 class="white-bold-text">This is Connect 4</h1>
      <h4 className="white-bold-text">The ultimate test of strategy and wits</h4>
      </div>
    <img className= "p-3" src="Connect 4 Box.jpg" alt="Connect 4 Box" width="300" height="auto" />*/}
      <form>
      <div><h3 className="white-bold-text p-3">To play a game, please login below:</h3></div>
          <div className="input-group custom-padding">
              <span className="input-group-text">Username:</span>
              <input className="form-control" type="text" id="text" name="varText" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="input-group custom-padding">
              <span className="input-group-text">Password: </span>
              <input className="form-control" type="password" id="password" name="varPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
              <button onClick={() => loginUser()} type="submit" className="btn btn-primary" disabled={!Username || !Password}>Login</button>
              <button onClick={() => createUser()} type="submit" className="btn btn-secondary" disabled={!Username || !Password}>Create</button>
      </form>
      <br />
  </main>
    );
}