exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_answers").insert([
    {
      student_answer: "15",
      student_id: 1,
      question_id: 2,
      quiz_id: 1,
    }
  ]);
};
