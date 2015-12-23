var express = require('express');
var app = express();
var path = require('path');
var port = 8000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/monkeys', function( req, res){
  res.render('monkeys', {greeting: 'Ohai!'});
});

app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
