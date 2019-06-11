exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_answers', tbl => {
    tbl.increments().unique();
    tbl.string('student_answer').notNullable();

    tbl
      .integer('student_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
    
    tbl
      .integer('question_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('questions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl
      .integer('quiz_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl
      .integer('correct_answer').unique()
      .unsigned()
      .notNullable()
      .references('correct_answer').unique()
      .inTable('questions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student_answers');
};