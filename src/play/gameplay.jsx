import React from "react";
import { TurnState } from "./turnState";
import { RedMove } from "./RedMove";
import { YellowMove } from "./YellowMove";
import { useState } from "react";

export function Gameplay(props){
    const Username = props.Username;
    const [turnState, setTurnState] = React.useState(props.turnState)
    const color1 = "blue"
    const color2 = "red"
    const color3 = "yellow"

    const [data, setData] = useState([
        { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
        { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
        { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
        { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
        { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
        { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 }
      ]);

    const getCellStyle = (score) => {
        if (score > 0) {
          return { backgroundColor: "yellow", color: "yellow" };  // Positive
        } else if (score < 0) {
          return { backgroundColor: "red", color: "red" };    // Negative
        } else {
          return { backgroundColor: "blue", color: "blue" };   // Zero
        }
      };

    const updateScore = (column, nextTurn) => {
        setData(prevData => {
            let updated = false;
            const newData = [...prevData].reverse().map((row, index, arr) => {
                if (!updated && row[column] ==0 && nextTurn == TurnState.Red) {
                    updated = true;
                    return {...row, [column]: row[column] + 1};
                }
                if (!updated && row[column] ==0 && nextTurn == TurnState.Yellow) {
                    updated = true;
                    return {...row, [column]: row[column] - 1};
                }
                return row;
            }).reverse();
            setTurnState(nextTurn)
            return newData;
        });
    }

    return (
        <main className="container-fluid">
                    {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive"> Forfeit Game</button>*/}
                    <br />
                    <table id="table-data" className="table table-bordered table-warning">
                      <thead>
                        <tr>
                            {Object.keys(data[0]).map((col) => (
                            <th key={col}>{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.values(row).map((value, colIndex) => (
                                        <td style={getCellStyle(value,colIndex)} key={colIndex}>{value}</td>
                                    ))}
                                    {/*<td style={getCellStyle(row.a)}>{row.a}</td>
                                    <td> <button onClick={() => updateScore(1, 2, +1)}>Up</button></td>
                                    <td style={getCellStyle(row.b)}>{row.b}</td>
                                    <td style={getCellStyle(row.c)}>{row.c}</td>
                                    <td style={getCellStyle(row.d)}>{row.d}</td>
                                    <td style={getCellStyle(row.e)}>{row.e}</td>
                                    <td style={getCellStyle(row.f)}>{row.f}</td>
                                    <td style={getCellStyle(row.g)}>{row.g}</td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                    {turnState === TurnState.Red && (
                        <RedMove Username={Username} onRedTurn={(col) => updateScore(col, TurnState.Yellow)} />
                        )}
                    {turnState === TurnState.Yellow && (
                        <YellowMove Username={Username} onYellowTurn={(col) => updateScore(col, TurnState.Red)} />
                        )}
                    </div>
                    <br />
            </main>
      );
    }
