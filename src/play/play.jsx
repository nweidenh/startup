import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className="container-fluid">
            <section>
                <div className="quote-box">
                    <div><h2><b>Username: Special User</b></h2></div>
                    <div className="fontsizer"> Your Color: <span className="yellow">Yellow</span></div> <span></span>
                </div>
                <br />
                    <li>Special User has joined as red. (Websocket placeholder)</li>
                    <li>Less Special User has joined as yellow. (Websocket placeholder)</li>
                    <li>Yellow just took their turn. (Websocket placeholder)</li>
                    <li>It is currently Red's Turn! (Websocket placeholder)</li>
                <br />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive"> Forfeit Game</button>
                <br />
                <br />
                <table id="table-data" className="table-bordered">
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
                </table>
                <br />
                <div className="alert alert-primary fontsizer">Click the column button where you want to drop your piece!</div>
                <button type="button" className="btn btn-primary btn-lg">A</button>
                <button type="button" className="btn btn-primary btn-lg">B</button>
                <button type="button" className="btn btn-primary btn-lg">C</button>
                <button type="button" className="btn btn-primary btn-lg">D</button>
                <button type="button" className="btn btn-primary btn-lg">E</button>
                <button type="button" className="btn btn-primary btn-lg">F</button>
                <button type="button" className="btn btn-primary btn-lg">G</button>
                <br />
                <br />
            </section>
        </main>
  );
}