const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const { createServerModuleRunner } = require('vite');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = [];
let results = [];

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
    const user = await findUser('username', req.body.username);
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
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//Verify User is Authorized
const verifyAuth = async (req, res, next) =>{
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user){
        next();
    } else{
        res.status(401).send({msg: 'Unauthorized User'});
    }
};

apiRouter.get('/scores', verifyAUth, (_req, res) =>{
    res.send(scores);
});

