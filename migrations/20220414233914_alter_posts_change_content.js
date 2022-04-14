/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) { // TODO: How to run all the migrations once?
    return knex.schema.
        alterTable('posts', function(table) {
            table.text('content').notNullable().alter()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.
        alterTable('posts', function(table) {
            table.string('content', 255).notNullable().alter()
        })
};
