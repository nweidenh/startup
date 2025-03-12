import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';


export function Unauthenticated(props) {
    const [Username, setUsername] = React.useState(props.Username);
    const [Password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState("");
  
    async function loginUser(){
      //localStorage.setItem('Username', Username);
      loginOrCreate(`/api/auth/login`);
    }
  
    async function createUser(){
        //localStorage.setItem('Username', Username);
        //props.onLogin(Username);
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
      const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ username: Username, password: Password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response?.status === 200) {
        localStorage.setItem('Username', Username);
        props.onLogin(Username);
      } else {
        const body = await response.json();
        setDisplayError(`Error: ${body.msg}`);
      }
    }

  
    return (
  //     <main className="container-fluid">
  //       <form>
  //     <div><h3 className="white-bold-text p-3">To play a game, please login below:</h3></div>
  //         <div className="input-group custom-padding">
  //             <span className="input-group-text">Username:</span>
  //             <input className="form-control" type="text" id="text" name="varText" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
  //         </div>
  //         <div className="input-group custom-padding">
  //             <span className="input-group-text">Password: </span>
  //             <input className="form-control" type="password" id="password" name="varPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
  //         </div>
  //             <button onClick={() => loginUser()} type="submit" className="btn btn-primary" disabled={!Username || !Password}>Login</button>
  //             <button onClick={() => createUser()} type="submit" className="btn btn-secondary" disabled={!Username || !Password}>Create</button>
  //     </form>
  //     <br />
  // </main>
  <>
  <div>
    <div className='input-group mb-3'>
      <span className='input-group-text'>Username:</span>
      <input className='form-control' type='text' value={Username} onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className='input-group mb-3'>
      <span className='input-group-text'>Password:</span>
      <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} />
    </div>
    <Button variant='primary' onClick={() => loginUser()} disabled={!Username || !Password}>
      Login
    </Button>
    <Button variant='secondary' onClick={() => createUser()} disabled={!Username || !Password}>
      Create
    </Button>
  </div>

  <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
</>
    );
}