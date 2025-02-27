export class TurnState{
    static Red = new TurnState('red');
    static Yellow = new TurnState('yellow');
    static GameEnd = new TurnState('gameEnd')

    constructor(name){
        this.name = name;
    }
}