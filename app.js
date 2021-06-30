// *********  PROTOCOL  *********
const https = require('https');
const http = require("http");

// *********  ENV  *********
require('dotenv').config();

// *********  SERVER PACKAGE  *********

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
const errorHandler = require('errorhandler');

// *********  DATABASE  *********

require('./database');

// *********  EXPRESS SETUP  *********

const app = express();
exports.app = app;

// *********  VIEWS FOR HYBRID APP  *********

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// *********  MIDDLEWARE  *********

require('./config/session.config');
require('./config/passport.config');


// *********  APP HEADER  *********

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// *********  BEHAVIOR  *********

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(index);

// *********  DEVELOPMENT ERROR HANDLER  *********

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
        });
    });
}

// *********  CREATE SERVER  *********

http.createServer(app).listen(80);