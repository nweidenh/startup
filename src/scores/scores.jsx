import React from 'react';
import './database.css';

export function Scores() {
  const [wins, setWins] = React.useState([]);

  React.useEffect(() => {
    //setWins('')
    //const winsText = localStorage.getItem('Wins')
    //if(winsText){
      //setWins(JSON.parse(winsText)) //Make the input text a JSON string that can be dissected, instead of 2 different input texts
    //}
    fetch('/api/scores')
      .then((response) => response.json())
      .then((results) => {
        setWins(results);
      });
    }, []);

  const scoreRows = [];
  if (wins.length > 0){
    for (const [i,win] of wins.entries())
      scoreRows.push(
        <tr key = {i}>
          <td>{i}</td>
          <td>{win.name}</td>
          <td>{win.winner}</td>
          <td>{win.loser}</td>
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