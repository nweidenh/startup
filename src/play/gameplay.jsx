import React from "react";
import { TurnState } from "./turnState";
import { redMove } from "./redMove";
import { yellowMove } from "./yellowMove";

export function Gameplay(turnState, onTurnChange){
    const Username = props.Username;

    return (
        <main className="container-fluid">
                    {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive"> Forfeit Game</button>*/}
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
                    <div>
                    {turnState === TurnState.Red && (
                        <redMove Username={Username} onRedTurn={() => onTurnChange(Username, TurnState.Yellow)} />
                        )}
                    {turnState === TurnState.Yellow && (
                        <yellowMove Username={Username} onYellowTurn={() => onTurnChange(Username, TurnState.Red)} />
                        )}
                    </div>
                    <br />
            </main>
      );
    }
