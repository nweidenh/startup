const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('connect4');

const userCollection = db.collection('user');
const scoreCollection = db.collection('wins');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(Username){
    return userCollection.findOne({Username: Username});
}

function findUserToken(token){
    return userCollection.findOne({token: token})
}

async function addUser(user){
    await userCollection.insertOne(user)
}

async function updateUser(user){
    await userCollection.updateOne({Username: user.Username}, { $set: user})
}

