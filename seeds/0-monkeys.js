exports.seed = function(knex, Promise) {
    return knex('monkeys').del().then(function(){
        return Promise.all([
            knex('monkey').insert({
                name: 'Damon',
                dob: "1/7/1997",
                email: "damon@monkey.com"
            }),
            knex('monkeys').insert({
                name: 'Shad',
                dob: "111/4/1977",
                email: "shad@monkey.com"
            }),
            knex('monkeys').insert({
                name: 'Elana',
                dob: "6/28/1984",
                email: "Damon@monkey.com"
            })
        ]);
    });
};
