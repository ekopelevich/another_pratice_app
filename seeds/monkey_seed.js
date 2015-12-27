
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('monkeys').del(),

    // Inserts seed entries
    knex('monkeys').insert({
      name: 'Mary',
      dob: '1/10/1997',
      email: 'mary@monkey.com'
    }),
    knex('monkeys').insert({
      name: 'Mel',
      dob: '11/4/1967',
      email: 'mel@monkey.com'
    }),
    knex('monkeys').insert({
      name: 'Max',
      dob: '4/23/1988',
      email: 'max@monkey.com'
    })
  );
};
