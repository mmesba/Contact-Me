/*
 * Title: App.js file
 * Description: Project's starting file
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */

// Dependencies.
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const submitRouter = require('./routes/submit')
 
// App object or Module scaffolding.
var app = express();

// main functions or objects.
// Permission to use methods.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/submit', submitRouter);
 
 





// export the module. 
module.exports = app;
