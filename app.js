const path = require('path');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const bodyParser = require('body-parser')
const session = require('express-session')

// use ROUTES
const viewRouter = require('./routes/viewRoutes')
const userRouter = require('./routes/userAuthRoutes');
const courseRouter = require('./routes/courseRoutes');
const loanRouter = require('./routes/loanRoutes');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
// Tells the browser where to download the "CS", "JavaScript" and the "images"
app.use(express.static(path.join(__dirname, 'public')));

// Dev login
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({
  secret: 'treehouse awesome',
  resave: true,
  saveUninitialized: false
}))


app.use('/', viewRouter)
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/loans', loanRouter);

module.exports = app;
