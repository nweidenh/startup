import React from "react";
import {GameEvent, GameNotifier} from './gameNotes'
import './notifications.css'

export function Notifications(props) {
    const Username = props.Username;
    const [events, setEvent] = React.useState([]);
  
    React.useEffect(() =>{
        GameNotifier.addHandler(handleGameEvent);

        return() => {
            GameNotifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event){
        setEvent([...events, event]);
    }

    function createMessageList() {
        const messageArray = [];
        for (const[i, event] of events.entries()){
            let message = 'unknown';
            if (event.type === GameEvent.End) {
                message = `${event.value.winner} won a game vs ${event.value.loser}`;
            } else if (event.type === GameEvent.Start){
                message = `${event.from} started a game`;
            } else if (event.type === GameEvent.System){
                message = event.value.msg;
            }
            messageArray.push(
                <div key= {i}>
                    <span className = {'player-event'}></span>
                    {message}
                </div>
            );
        }
        return messageArray;
    }

    return(
        <div className="container-fluid">
        <div className="quote-box">
        <h2><b>Username: {props.Username}</b></h2>
        <div className="fontsizer"> Your Color: <span className="yellow">Yellow</span></div>
        The computer will play as <span className="red">red</span>
        </div>
        <div id = 'player-messages'>{createMessageList()}</div>
        </div>
    );
}