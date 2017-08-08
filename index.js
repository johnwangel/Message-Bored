/*jshint esversion: 6*/

const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const db = require('./models');

let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  store: new RedisStore(),
  secret: 'run with the devil',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  // db.sequelize.drop();
  // db.sequelize.sync({force: true});
  console.log(`server running on ${PORT}`);
});

module.exports = app;