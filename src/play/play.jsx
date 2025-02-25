import React from 'react';
import './play.css';

export function Play() {
  const [msg, setMsg] = React.useState('...listening')

  React.useEffect(() =>{
    setInterval(()=> {
      const names = ['sue', 'fred']
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomCount = Math.floor(Math.random() * 100) + 1;
      const newMsg = `${randomName}: ${randomCount}`;
      setMsg(newMsg);
    }, 1000);
  })

  return (
    <main className="container-fluid">
                <div className="quote-box">
                    <div><h2><b>Username: Special User</b></h2></div>
                    <div className="fontsizer"> Your Color: <span className="yellow">Yellow</span></div> <span></span>
                </div>
                <br />
                <div className='weblist'>
                    <div>{msg}</div>
                    <div>Less Special User has joined as yellow. (Websocket placeholder)</div>
                    <div>Yellow just took their turn. (Websocket placeholder)</div>
                    <div>It is currently Red's Turn! (Websocket placeholder)</div>
                </div>
                <br />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive"> Forfeit Game</button>
                <br />
                <br />
                <table id="table-data" className="table table-bordered table-warning">
                  <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                        <th>G</th>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="red"></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="yellow"></td>
                        <td className="red"></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="yellow"></td>
                        <td className="red"></td>
                        <td className="yellow"></td>
                      </tr>
                    </thead>
                </table>
                <br />
                <div className="alert alert-primary fontsizer">Click the column button where you want to drop your piece!</div>
                <div>
                <button type="button" className="btn btn-primary btn-lg">A</button>
                <button type="button" className="btn btn-primary btn-lg">B</button>
                <button type="button" className="btn btn-primary btn-lg">C</button>
                <button type="button" className="btn btn-primary btn-lg">D</button>
                <button type="button" className="btn btn-primary btn-lg">E</button>
                <button type="button" className="btn btn-primary btn-lg">F</button>
                <button type="button" className="btn btn-primary btn-lg">G</button>
                </div>
                <br />
                <br />
        </main>
  );
}