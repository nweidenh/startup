import React from 'react';
import './database.css';

export function Scores() {
  const [wins, setWins] = React.useState([]);

  React.useEffect(() => {
    const winsText = localStorage.getItem('Wins')
    if(winsText){
      setWins(JSON.parse(winsText)) //Make the input text a JSON string that can be dissected, instead of 2 different input texts
    }
    }, []);

  const scoreRows = [];
  if (wins.length > 0){
    for (const [i,wins] of wins.entries())
      scoreRows.push(
        <tr key = {i}>
          <td>{i}</td>
          <td>{wins.name}</td>
          <td>{wins.winner}</td>
          <td>{wins.loser}</td>
        </tr>
      );
  } else{
    scoreRows.push(
      <tr key = '0'>
        <td colSpan = '5'> No One Has Played A Game Yet</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid text-center">
        <h1>Check Out All The Games That Have Been Played</h1>
                <table className="table table-warning table-striped-columns">
                  <thead className="table-dark">
                    <tr>
                        <th>GameID</th>
                        <th>Player Name</th>
                        <th>Winner</th>
                        <th>Loser</th>
                    </tr>
                  </thead>
                  <tbody id='wins'>{scoreRows}</tbody>
                </table>
        </main>
  );
}