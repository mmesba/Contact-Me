/*
 * Title: App.js file
 * Description: Project's starting file
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */

// Dependencies.
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const submitRouter = require('./routes/submit')
 
// Connecting with MongoDB via mongoose
mongoose.connect(process.env.CUSTOMCONNSTR_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

.then(()=>console.log('Connected with MongoDB'))
.catch((err)=>console.log(err))


// App object or Module scaffolding.
var app = express();

// main functions or objects.
// Set view engine
app.set('view engine', 'ejs');

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
