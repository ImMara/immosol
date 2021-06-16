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

// require('./database');

// *********  EXPRESS SETUP  *********

const app = express();
exports.app = app;

// *********  VIEWS FOR HYBRID APP  *********

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// *********  MIDDLEWARE  *********

require('./config/session.config');
require('./config/passport.config');

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