const { password } = require('./.env')

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql_db',
    user: 'root',
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};