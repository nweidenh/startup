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
        // setInterval(()=> {
        //     const names = ['Sue', 'John', 'Nathan']
        //     const things = [' is watching ', ' joined ', ' forfeited ']
        //     const randomName = names[Math.floor(Math.random() * names.length)]
        //     this.broadcastEvent(randomName, GameEvent.End, {winner: randomName})
        //   }, 5000);

        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss'
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.recieveEvent(new EventMessage('Connect4', GameEvent.System, {msg: 'connected'}));
        };
        this.socket.onclose = (event) => {
            this.recieveEvent(new EventMessage('Connect4', GameEvent.System, {msg: 'disconnected'}));
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.recieveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, type, value){
        const event = new EventMessage(from, type, value)
        //this.recieveEvent(event)
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler)
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }
    recieveEvent(event){
        this.events.push(event);

        this.events.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler(e);
            });
        });
    }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };