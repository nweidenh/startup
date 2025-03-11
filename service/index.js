const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
//const { createServerModuleRunner } = require('vite');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = [];
let results = [];

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());

let apiRouter = express.Router();
app.use(`/api`, apiRouter)

//Create a new User
apiRouter.post('/auth/create', async (req, res) => {
    if (await finduser('username', req.body.username)){
        res.status(409).send({ msg: 'Existing User'});
    } else {
        const user = await createUser(req.body.username, req.body.password);
        setAuthCookie(res, user.token);
        res.send({email: user.email});
    }
});

//Login
apiRouter.post('/auth/login', async (req, res) => {
    const user = await getUser('username', req.body.username);
    if (user){
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4()
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
        clearAuthCookie(res, user)
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
apiRouter.get('/results', verifyAuth, (_req, res) =>{
    res.send(results);
});

// Post Result
apiRouter.post('/result', verifyAuth, (req, res) =>{
    results = updateResults(req.body);
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
    };

    users.push(user);

    return user;
}

function setAuthCookie(res, user){
    user.token = uuid.v4()

    res.cookie('token', user.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

function getUser(field, value) {
    if (value) {
      return users.find((user) => user[field] === value);
    }
    return null;
  }

function clearAuthCookie(res, user) {
    delete user.token;
    res.clearCookie('token');
  }

//Update Results - NEED TO FIX THIS
function updateResults(newResult){
    let found = false;
    for (const [i, prevScore] of results.entries()){
        if (newScore.score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
          }
    }
      
    if (!found) {
        scores.push(newScore);
    }
      
    if (scores.length > 10) {
        scores.length = 10;
    }
      
    return scores;
}