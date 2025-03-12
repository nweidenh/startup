import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Authenticated(props) {
    const navigate = useNavigate();
  
    async function logout(){
      //localStorage.removeItem('Username');
      fetch(`/api/auth/logout`, {
        method: 'delete',
      })
      .finally(() => {
        localStorage.removeItem('Username');
        props.onLogout();
      });
    }
  
    return (
      <main className="container-fluid">
      <form>
      <div><h3 className="white-bold-text p-3">Welcome {props.Username}</h3></div>
      <div><h3 className="white-bold-text p-3">To play Connect4, please click the play button</h3></div>   
        <button onClick={() => navigate('/play')} type="submit" className="btn btn-primary">Play</button>
        <button onClick={() => logout()} type="submit" className="btn btn-secondary">Logout</button>
      </form>
      <br />
  </main>
    );
}