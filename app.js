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
const errorHandler = require('./Controllers/errorHandler')
const awake = require('./awake');
 
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
// Initiate Static Directory
app.use('/assets', express.static('./Assets'))

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
 
// Using awake module in app js.
    //  wrap everything in an interval function so it can request subsequently
setInterval(() => {
    awake.awake('http://mesba.azurewebsites.net')    
}, 1000*60*15);


// Random endpoints redirect to main site
app.all('*', (req, res)=>{
    res.redirect('http://mesba.live')
})

// Using app's error handler
app.use(errorHandler);

// export the module. 
module.exports = app;
