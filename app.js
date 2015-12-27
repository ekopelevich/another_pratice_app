var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
var cors = require('cors');
var port = 8000;

var monkeysRoute = require("./routes/monkeys");

// allow cors
app.use(cors());

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/monkeys", monkeysRoute);

app.listen(port, function(){
    console.log("Running on port ", port);
});
