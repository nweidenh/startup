import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Authenticated({props}) {
    const navigate = useNavigate();
  
    function logout(){
      localStorage.removeItem('Username');
      props.onLogout(Username)
    }
  
    return (
      <main className="container-fluid">
      <div className="p-3"><h1 class="white-bold-text">This is Connect 4</h1>
      <h4 className="white-bold-text">The ultimate test of strategy and wits</h4>
      </div>
      <img className= "p-3" src="Connect 4 Box.jpg" alt="Connect 4 Box" width="300" height="auto" />
      <form>
      <div><h3 className="white-bold-text p-3">Welcome {Username}</h3></div>
      <div><h3 className="white-bold-text p-3">To play a Connect4, please click the play button</h3></div>   
        <button onClick={() => navigate('/play')} type="submit" className="btn btn-primary">Logout</button>
        <button onClick={() => logout()} type="submit" className="btn btn-secondary">Logout</button>
      </form>
      <br />
  </main>
    );
}