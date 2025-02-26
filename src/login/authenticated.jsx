import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Authenticated(props) {
    const navigate = useNavigate();
  
    function logout(){
      localStorage.removeItem('Username');
      props.onLogout()
    }
  
    return (
      <main className="container-fluid">
      <form>
      <div><h3 className="white-bold-text p-3">Welcome {props.Username}</h3></div>
      <div><h3 className="white-bold-text p-3">To play a Connect4, please click the play button</h3></div>   
        <button onClick={() => navigate('/play')} type="submit" className="btn btn-primary">Play</button>
        <button onClick={() => logout()} type="submit" className="btn btn-secondary">Logout</button>
      </form>
      <br />
  </main>
    );
}