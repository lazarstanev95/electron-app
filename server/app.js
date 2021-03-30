const express = require('express');
const path = require('path');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

require(path.resolve('middlewares', 'index.middleware'))(app);
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/test', function(req, res) {
    res.json({
        message: 'success fetch from server'
    })
});

module.exports = app;