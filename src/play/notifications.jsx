import React from "react";
import {GameNotifier, GameEvent} from './gameNotes'

export function Notifications(props) {
    const Username = props.Username
    const [msg, setMsg] = React.useState([])
  
    React.useEffect(() =>{
        GameNotifier.addHandler(handleGameEvent);

        return() => {
            GameNotifier.removeHandler(handleGameEvent);
        };
    }, []);

    function handleGameEvent(event){
        setEvent((prevEvents) => {
            let newEvents = [event, ...prevEvents];
            if (newEvents.lenght > 5) {
                newEvents = newEvents.slice(1,5);
            }
            return newEvents;
        })
    }

    function createMessageList() {
        const messageArray = [];
        for (const[i, event] of events.entries()){
            let message = 'unknown';
            if (event.type === GameEvent.End) {
                message = `${event.value.winner} won a game`
            } else if (event.type === GameEvent.Start){
                message = `${event.from} joined a game`
            } else if (event.type === GameEvent.Observe){
                message = `${event.from} is watching a game`
            } else if (event.type === GameEvent.System){
                message = event.value.msg;
            }
        }
    }

    return(
        <main className="container-fluid">
        <div className="quote-box">
        <div><h2><b>Username: {props.Username}</b></h2></div>
        <div className="fontsizer"> Your Color: <span className="yellow">Yellow</span></div> <span></span>
        </div>
        <br />
        <div className='weblist'>
        <div>{msg}</div>
        </div>
        </main>
    )
}