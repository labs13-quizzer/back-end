const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  remove,
  update,
  getQuizByTeacher,
  getQuizWithQuestions
};

function find() {
  return db("quizzes");
}

function findBy(filter) {
  return db("quizzes").where(filter);
}

async function add(data) {
  const [id] = await db("quizzes").insert(data);

  return findById(id);
}

function findById(id) {
  return db("quizzes")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("quizzes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("quizzes")
    .where("id", id)
    .del();
}

async function getQuizByTeacher(id) {
  const quizzes = await db("quizzes").where("quizzes.teacher_id", id);

  return {
    quizzes
  };
}

async function getQuizWithQuestions(id) {
  const quiz = await db("quizzes")
    .join("questions", "questions.quiz_id", "quizzes.id")
    .select("*")
    .where("quizzes.id", id);

  return {
    quiz
  };
}
