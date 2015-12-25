var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var cors = require('cors');
var port = 8000;

var monkeysRoute = require("./routes/monkeys");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// serve static files (css)
app.use(express.static(__dirname + '/public'));

// allow cors
app.use(cors());

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/monkeys", monkeysRoute);


app.listen(port, function(){
    console.log("Running on port ", port);
});
