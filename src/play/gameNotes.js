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
            const things = [' is watching ', ' joined ', ' forfeited ']
            const randomName = names[Math.floor(Math.random() * names.length)]
            this.broadcastEvent(randomName, GameEvent.End, {winner: randomName})
          }, 5000);
    }

    broadcastEvent(from, type, value){
        const event = new EventMessage(from, type, value)
        this.recieveEvent(event)
    }

    addHandler(handler) {
        this.handlers.push(handler)
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }
    recieveEvent(event){
        this.events.push(event);
        this.handlers.forEach((handler) => {
            handler(event);
        });
    }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };