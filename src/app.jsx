import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (<div className="body">
  <header className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className = "navbar-brand" href="#">
                        <h1>Connect 4</h1>
                    </a>
                    <menu className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="index.html"><b>Home</b></a></li>
                            <li className="nav-item"><a href="play_game.html" className="nav-link"><b>Play Game</b></a></li>
                            <li className="nav-item"><a href="database.html" className="nav-link"><b>Wins Database</b></a></li>
                            <li className="nav-item"><a href="info.html" className="nav-link"><b>Info</b></a></li>
                    </menu>
                </div>
            </nav>
        </header>

  <main>App components go here</main>

  <footer>
        <div className="navbar bg-light">
        <span className="name"> <h2>Creator: Nathan Weidenhamer </h2> </span>
        <a href="https://github.com/nweidenh/startup"><h3 className="githublink">Link To My Github</h3></a>
        </div>
    </footer>
  </div>
);
}