export class AuthState{
    static Unknown = new AuthState('unkown')
    static Authenticated = new AuthState('authenticated');
    static Unauthenticated = new AuthState('unauthenticated');

    constructor(name){
        this.name = name;
    }
}