import React from 'react';
import './database.css';

export function Scores() {
  return (
    <main className="container-fluid text-center">
        <p><h2>Wins Database</h2></p>
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