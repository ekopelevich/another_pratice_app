
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('monkeys', function(table){
      table.increments('id');
      table.string('name');
      table.date('dob');
      table.string('email');
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('monkeys')
  ]);
};
