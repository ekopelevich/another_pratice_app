//require('dotenv').load();

var express = require( 'express' );
var router = express.Router();

var knex = require( 'knex' )({
    client: 'pg',
    connection: 'postgres://monkey_admin@localhost/monkeydb'
});

// get all the monkeys
router.get( '/', function( req, res ){
  knex.select().from( 'monkeys' )
      .then( function( monkeys ){
          res.status( 200 ).send({monkeys: monkeys});
  });
});

// get one monkey
router.get( '/:id', function( req, res ){
    knex.select().from( 'monkeys' )
        .where('id', req.params.id)
        .then(function( monkeys ){
            res.status( 200 ).send({monkeys: monkeys});
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
  console.log(req.body);
});

module.exports = router;
