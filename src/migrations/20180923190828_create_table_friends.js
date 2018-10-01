exports.up = function (knex, Promise) {
  return knex.schema.createTable('friends', table => {
    table.integer('id_user').unsigned().notNullable();
    table.integer('friend_id').unsigned().notNullable();
    table.datetime('create_at', 6).defaultTo(knex.fn.now(6))


    table.foreign('id_user').references('id_user').inTable('users');
    table.foreign('friend_id').references('id_user').inTable('users');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('friends')
};