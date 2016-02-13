'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config');

module.exports = function(db) {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    var api = express.Router();
    require('../app/core/routes/core.routes')(api);
    
    app.use('/api', api);
    
    return app;
}