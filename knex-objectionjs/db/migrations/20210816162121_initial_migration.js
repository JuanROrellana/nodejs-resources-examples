

export const up = (knex) => {
    return knex.schema
        .createTable('channel', (tableBuilder ) => {
            tableBuilder.increments();
            tableBuilder.string('name').notNullable();
            tableBuilder.timestamps(true, true);
        })
        .createTable('user',(tableBuilder) => {
            tableBuilder.increments();
            tableBuilder.string('name').notNullable();
            tableBuilder.string('email').notNullable().unique();
            tableBuilder.integer('channelId').references('id').inTable('channel')
            tableBuilder.timestamps(true, true);
        })
        .createTable('video',(tableBuilder) => {
            tableBuilder.increments();
            tableBuilder.string('title').notNullable();
            tableBuilder.integer('channelId').notNullable().references('id').inTable('channel');
            tableBuilder.timestamps(true, true);
        });
};

export const down = (knex) => {
    return knex
        .dropTableIfExists('video')
        .dropTableIfExists('user')
        .dropTableIfExists('channel');
};
