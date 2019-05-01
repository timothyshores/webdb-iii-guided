
exports.up = function (knex, Promise) {
    return knex.schema.createTable('roles', tbl => {
        // Creates an auto-incrementing primary key 
        tbl.increments();

        // Creates a unique not null column called name
        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        //Creates create_at and updated_at columns
        tbl.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {

};
