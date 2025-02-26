export class TurnState{
    static Red = new TurnState('red');
    static Yellow = new TurnState('yellow');

    constructor(name){
        this.name = name;
    }
}