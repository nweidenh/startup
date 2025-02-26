const GameEvent ={
    End: 'gameEnd',
    Start: 'gameStart',
    Observe: 'gameObserve',
    System: 'system'
}

class EventMessage{
    constructor(from, type, value){
        this.from = from;
        this.type = type;
        this.value = value;
    }
}


class GameEventNotifier{
    events = []
    handlers = []

    constructor(){
        setInterval(()=> {
            const names = ['Sue', 'John', 'Nathan']
            const events = [' is watching ', ' joined ', ' forfeited ']
            const randomName = names[Math.floor(Math.random() * names.length)]
            const randomEvent = events[Math.floor(Math.random() * names.length)]
            const newMsg = (randomName + randomEvent + "the game");
            this.broadcastEvent(randomName, GameEvent.End, {winner: randomName})
          }, 5000);
    }

    broadcastEvent(from, type, value){
        const event = new EventMessage(from, type, value)
        this.recieveEvent(event)
    }

    addHandler(handler) {
        this.handler.push(handler)
    }

    removeHandler(handler) {
        this.handler.filter((h) => h !== handler);
    }
    recieveEvent(event){
        this.events.push(events);
        this.handlers.forEach((handler) => {
            handler(event);
        });
    }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };