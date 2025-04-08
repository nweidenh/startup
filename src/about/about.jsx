import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import './info.css';

export function About(props) {
  const [joke, setJoke] = React.useState('TBD');

  React.useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch();
  }, []);
  
  return (
    <main className='container-fluid'>
      <div className='content-container'>
      <section className="text-box">
        <h2 className="head-box">What is Connect 4 and who created it?</h2>
        <p>
          Connect 4 is a game of wits where you compete against another person to try to be the first to connect 4 
          pieces of your color horizontally, vertically, or diagnolly.
        </p>
        <p>
            Connect 4 was originally invented by Howard Wexler, but was later popularized by Milton Bradley. In addition to Milton,
            Hasbro was one of the main companies to market and sell the Connect 4 game. 
            Today Connect 4 is a common game among children playing for fun, and adults seeking to <b className="large">destroy</b> their friends!
        </p>
      </section>
      <br />
      <section id="Quote" className="text-box">
        <p>{joke} <br />
        Jokes by Chuck Norris Himself</p>
      </section>
      </div>
    </main>
  );
}