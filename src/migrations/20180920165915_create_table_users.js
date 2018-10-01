exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id_user').primary()
    table.string('name', 80).notNullable()
    table.string('email', 80).notNullable()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
};