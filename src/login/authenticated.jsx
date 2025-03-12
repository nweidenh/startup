import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
    const navigate = useNavigate();
  
    async function logout(){
      //localStorage.removeItem('Username');
      fetch(`/api/auth/logout`, {
        method: 'delete',
      })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('Username');
        props.onLogout();
      });
    }
  
    return (
      <div className="container-fluid">
      <div><h3 className="white-bold-text p-3">Welcome {props.Username}</h3></div>
      <div><h3 className="white-bold-text p-3">To play Connect4, please click the play button</h3></div>   
        <Button onClick={() => navigate('/play')} type="submit" className="btn btn-primary">Play</Button>
        <Button onClick={() => logout()} type="submit" className="btn btn-secondary">Logout</Button>
      <br />
  </div>
    );
}