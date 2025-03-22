const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
//const { createServerModuleRunner } = require('vite');
const authCookieName = 'token';
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;


app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Create a new User
apiRouter.post('/auth/create', async (req, res) => {
    if (await getUser('username', req.body.username)){
        res.status(409).send({ msg: 'Existing User'});
    } else {
        const user = await createUser(req.body.username, req.body.password);
        setAuthCookie(res, user.token);
        res.send({username: user.username});
    }
});

//Login
apiRouter.post('/auth/login', async (req, res) => {
    const user = await getUser('username', req.body.username);
    if (user){
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setAuthCookie(res, user.token);
            res.send({username: user.username});
            return;
        }
    }
    res.status(401).send({msg: 'Unauthorized User'});
});

//Logout
apiRouter.delete('/auth/logout', async (req,res) => {
    const user = await getUser('token', req.cookies[authCookieName]);
    if (user) {
        clearAuthCookie(res, user);
        DB.updateUser(user);
    }
    res.status(204).end();
});

//Verify User is Authorized
const verifyAuth = async (req, res, next) =>{
    const user = await getUser('token', req.cookies[authCookieName]);
    if (user){
        next();
    } else{
        res.status(401).send({msg: 'Unauthorized User'});
    }
};

// Get Results
apiRouter.get('/results', verifyAuth, async (_req, res) =>{
    const results = await DB.getWins();
    res.send(results);
});

// Post Result
apiRouter.post('/result', verifyAuth, async (req, res) =>{
    const results = updateResults(req.body);
    res.send(results);
});

//Error Handler
app.use(function (err, req, res, next) {
    res.status(555).send({type: err.name, message: err.message});
});


async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };

    await DB.addUser(user)
    //users.push(user);

    return user;
}

function setAuthCookie(res, authToken){
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

function getUser(field, value) {
    if (!value) return null;

    if (field === 'token') {
        return DB.findUserToken(value)
    }

    return DB.findUser(value);
    //return users.find((u) => u[field] === value);
  }

function clearAuthCookie(res, user) {
    delete user.token;
    res.clearCookie('token');
  }

//Update Results
async function updateResults(newResult){
    await DB.addWin(newResult);
    return DB.getWins();
    
    // results.push(newResult);

    // if (results.length > 10) {
    //     results.length = 10;
    // }
      
    // return results;
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });