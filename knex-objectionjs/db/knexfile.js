import objection from 'objection';
const { knexSnakeCaseMappers } = objection;

export default {
  development: {
    client: 'postgresql',
    connection: {
      database: 'test_db',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory: './seeds'
    },
    ...knexSnakeCaseMappers
  },
};
