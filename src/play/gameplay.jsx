import React from "react";
import { TurnState } from "./turnState";
import { RedMove } from "./RedMove";
import { YellowMove } from "./YellowMove";
import { useState } from "react";

export function Gameplay(props){
    const Username = props.Username;
    const [turnState, setTurnState] = React.useState(props.turnState)
    const [moveResult, setMoveResult] = React.useState('')
    const [winner, setWinner] = React.useState('')

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
                if (!updated && row[column] == 0 && nextTurn == TurnState.Red) {
                    updated = true;
                    return {...row, [column]: row[column] + 1};
                }
                if (!updated && row[column] == 0 && nextTurn == TurnState.Yellow) {
                    updated = true;
                    return {...row, [column]: row[column] - 1};
                }
                return row;
            }).reverse();
            if (updated == true){
                setTurnState(nextTurn);
                setMoveResult("Yes!");
            } else{
                setMoveResult("No, please try again");
            }
            if(checkWin(newData) === 1){
                winner = setWinner("Congrats! You Win!");
            } else if(checkWin(newData) === -1){
                winner = setWinner("Sorry to say it, but the computer beat you!");
            } else{
                winner = setWinner("No winner yet...")
            }
                return newData;
        });
    }

    const checkWin = (board) => {
        const rows = board.length;
        const cols = Object.keys(board[0]).length;
        const directions = [
            {r:0, c:1},
            {r:1, c:0},
            {r:1, c:1},
            {r:1, c:-1}
        ];

        const colKeys = Object.keys(board[0]);

        const getCell = (r, c) => (board[r] && board[r][colKeys[c]]) ?? null;

        for(let r=0; r < rows; r++){
            for(let c=0; c<cols; c++){
                const cellValue = getCell(r,c);
                if (cellValue === 0) continue;
                for (let {r:dr, c:dc} of directions){
                    let count = 1;
                    let nr = r + dr;
                    let nc = c + dc;

                    while (
                        nr >= 0 &&
                        nr < rows &&
                        nc >= 0 &&
                        nc < cols &&
                        getCell(nr, nc) ===cellValue
                    ) {
                        count++
                        if(count ==4) return cellValue;
                        nr += dr;
                        nc += dc;
                    }
                }
                // if(board[r][colKeys[c]] === 1){
                //     if(board[r+1][colKeys[c]] === 1){
                //         if (board[r+2] [colKeys[c]] === 1){
                //             if (board[r+3] [colKeys[c]] === 1){
                //                 winner = true;
                //             }
                //         }
                //     }
                // } else if (board[r]
            }
        }
    }



    return (
        <main className="container-fluid">
                    {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive"> Forfeit Game</button>*/}
                    <h1>And the Winner is? {winner}</h1>
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
                        <br />
                    <h1>Move Success? {moveResult}</h1>
                    </div>
                    <br />
            </main>
      );
    }
