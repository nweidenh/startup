const { MongoClient, CursorTimeoutMode } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('connect4');

const userCollection = db.collection('user');
const winCollection = db.collection('wins');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function findUser(username){
    return userCollection.findOne({username: username});
}

function findUserToken(token){
    return userCollection.findOne({token: token})
}

async function addUser(user){
    await userCollection.insertOne(user)
}

async function updateUser(user){
    await userCollection.updateOne({username: user.username}, { $set: user})
}

async function addWin(result){
    return winCollection.insertOne(result)
}

function getWins(){
    const wins = winCollection.find();
    return wins.toArray();
}

