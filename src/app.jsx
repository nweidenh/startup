import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';

export default function App() {
  const [Username, setUsername] = React.useState(localStorage.getItem('Username') || '')
  const currentAuthState = Username ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState)

  return (
    <BrowserRouter>
  <div className="body">
  <header className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className = "navbar-brand" to="#">
                        <h1>Connect 4</h1>
                    </NavLink>
                    <menu className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink to="" className="nav-link active"><b>Home</b></NavLink></li>
                            {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink to="play" className="nav-link"><b>Play Game</b></NavLink></li>)}
                            {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink to="scores" className="nav-link"><b>Wins Database</b></NavLink></li>)}
                            <li className="nav-item"><NavLink to="about" className="nav-link"><b>Info</b></NavLink></li>
                    </menu>
                </div>
            </nav>
        </header>

  <main>
    <Routes>
        <Route path='/' element={<Login 
          Username = {Username}
          authState = {authState}
          onAuthChange = {(Username, authState) =>{
            setAuthState(authState);
            setUsername(Username);
          }}
        />
        } 
        exact />
        <Route path='/play' element={<Play />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  </main>

  <footer>
        <div className="navbar bg-light">
        <span className="name"> <h2>Creator: Nathan Weidenhamer </h2> </span>
        <a href="https://github.com/nweidenh/startup"><h3 className="githublink">Link To My Github</h3></a>
        </div>
    </footer>
  </div>
  </BrowserRouter>
);
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }