exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('email', 128).notNullable().unique();
            table.string('name', 30).notNullable();
            table.string('password', 30).notNullable();
            table
                .enu('role', [
                    'administrator',
                    'visitor',
                ])
                .notNullable()
                .defaultsTo('visitor');
            table.string('city', 30);
            table.timestamps(true, true);
        });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
