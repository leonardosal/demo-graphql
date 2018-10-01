exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments('id_post').primary()
    table.string('description', 80).notNullable()
    table.integer('id_user').unsigned().notNullable();
    table.datetime('create_at', 6).defaultTo(knex.fn.now(6))


    table.foreign('id_user').references('id_user').inTable('users');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
};