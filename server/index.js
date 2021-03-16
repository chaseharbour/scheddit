const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const session =  require('express-session');
const redis = require('redis');
const redisClient = redis.createClient({
  host: 'redis-server',
  port: 6379
});
const RedisStore = require('connect-redis')(session);
const app = express();
const cors = require('cors');
//const SessionStore = require('express-session-sequelize')(session.Store);

//const db =  require('./db/models/database');
//const Users = require('./db/models/Users');

//const sequelizeSessionStore = new SessionStore({
//  db,
//});

const FOUR_HOURS = 1000 * 60 * 60 * 1;



const {
  SERVER_PORT = 8081,
  CLIENT_PORT = 3000,
  NODE_ENV = 'development',
  SESS_LIFETIME = FOUR_HOURS,
  SESS_NAME = 'sid',
  SESS_SECRET = 'somesupersecretstring'
} = process.env;

const IN_PROD = NODE_ENV === 'production'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Redis error handling
redisClient.on('error', (err) => console.log(`Redis error: ${err}`));

//Create session object with cookie
app.use(session({
  name: SESS_NAME,
  store: new RedisStore({ client: redisClient }),
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }
}))

//SETUP CORS
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}))

//ROUTES
app.use('/auth', require('./routes/auth_routes'));
app.use('/dashboard', require('./routes/dashboard_routes'));


//Get welcome page with login
//Instantiate token
const authCheck = (req, res, next) => {
  if (!req.session.userName) {
    res.status(401).json({
      authenticated: false,
      message: "User has not been authenticated."
    });
  } else {
    next();
  }
}

//Testing retrieval from DB
//app.get('/users', Users.readAll);

app.get('/', authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "User successfully authenticated.",
    user: req.session.userName,
    cookies: req.cookies
  })
})

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});