import React from 'react';
import './database.css';

export function Scores() {
  const [wins, setWins] = React.useState([]);
  const [losses, setLs] = React.useState([]);

  React.useEffect(() => {
    const winsText = localStorage.getItem('wins')
    const lossText = localStorage.getItem('loss')
    if(winsText){
      setWins(JSON.parse(winsText))
      setLs(JSON.parse(lossText)) //Make the input text a JSON string that can be dissected, instead of 2 different input texts
    }
    }, []);

  const scoreRows = [];
  if (wins.length > 0){
    for (const [i,wins] of wins.entries())
      scoreRows.push(
        <tr key = {i}>
          <td>{i}</td>
          <td>{wins.name.split('@')[0]}</td>
          <td>{wins.score}</td>
          <td>{wins.date}</td>
        </tr>
      );
  } else{
    scoreRows.push(
      <tr key = '0'>
        <td colSpan = '4'> No One Has Played A Game Yet</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid text-center">
        <h1>Check Out The Leaderboard</h1>
                <table className="table table-warning table-striped-columns">
                  <thead className="table-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draws</th>
                        <th>Win Percentage</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Special User</td>
                        <td>10</td>
                        <td>0</td>
                        <td>0</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Less Special User</td>
                        <td>5</td>
                        <td>5</td>
                        <td>0</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Not Special User</td>
                        <td>0</td>
                        <td>10</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                  </thead>
                </table>
        </main>
  );
}