exports.up = function(knex, Promise) {
  return knex.schema.createTable('quizzes', tbl => {
    tbl.increments()
    tbl.integer('class_average')

    tbl
      .integer('teacher_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('teachers')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quizzes');
};