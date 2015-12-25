// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'monkeydb',
            user:     'monkey_admin',
            password: 'monkey_password'
        }
    },
    production: {
        client: 'pg',
        connection: 'postgres://monkey_admin@localhost/monkeydb'
    }
};
