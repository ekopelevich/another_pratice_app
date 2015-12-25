//require('dotenv').load();

var express = require("express");
var router = express.Router();

var knex = require("knex")({
    client: "pg",
    connection: 'postgres://monkey_admin@localhost/monkeydb'
});

// get all the monkeys
router.get( '/', function( req, res ){
  knex( 'monkeys' ).select()
      .where(' id', req.params.id )
      .then( function( monkeys ){
          res.status( 200 ).send( {monkeys: monkeys} );
  });
  // res.render( 'monkeys', {greeting: 'Ohai!'} );
});

// get one monkey
router.get('/:id', function(request, response){
    knex('monkeys').select()
        .where('id', request.params.id)
        .then(function(students){
            response.status( 200 ).send({monkeys: monkeys});
    });
});

// create a new monkey
router.post( '/', function( req, res ){
    knex( 'monkeys' ).insert({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email
    }, 'id' ).then( function( id ){
        req.body.id = id[0];
        res.status( 201 ).send( req.body );
    });
});

module.exports = router;
