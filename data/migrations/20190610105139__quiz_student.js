
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quiz_student', tbl => {
    tbl.increments().unique();
    
    tbl
      .integer('student_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('students')
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
      
    tbl.integer('score').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quiz_student');
};