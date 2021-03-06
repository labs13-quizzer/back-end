const router = require("express").Router();
const folderDb = require("../model/folderModel");

const db = require("../model/QuizModel");

//Check -> means that the endpoint has been tested and is in working order

//get all quizzes
router.get("/quizzes", async (req, res) => {
  const rows = await db.find();

  res.status(200).json(rows);
});

//get quiz by id
router.get("/quizzes/:id", (req, res) => {
  try {
    db.getQuizWithQuestions(req.params.id).then(data => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
});

//Check
router.post("/quizzes", async (req, res) => {
  try {
    const data = req.body;

    if (data.quiz.teacher_id) {
      const result = await db.add(data.quiz);
      //console.log('result:', result)

      res.status(201).json(result);
    } else {
      res.status(422).json({ error: "Missing data" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Check
router.put("/quizzes/:id", async (req, res) => {
  try {
    const Data = req.body;
    const { id } = req.params;
    //console.log(id)

    if (Data) {
      const array = await db.update(id, Data);
      //console.log(Data)
      res.status(200).json({ message: `The id # ${id} has been edited` });
    } else {
      res.status(422).json({ error: "Missing required fields" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Check
router.delete("/quizzes/:id", async (req, res) => {
  try {
    const ifStudentIsAssignedToQuiz = await db.findByStudentAndQuiz(
      req.params.id
    );

    const ifQuizIsInFolder = await folderDb.findByQuizId(req.params.id);

    console.log(ifStudentIsAssignedToQuiz);

    if (ifStudentIsAssignedToQuiz.length > 0) {
      await db.deleteStudentToQuiz(req.params.id);
    }

    if (ifQuizIsInFolder) {
      await folderDb.RemoveQuizFromFolder(req.params.id);
    }
    const deleteUser = await db.remove(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

//Check
// router.put('/quizzes/:id', async (req, res) => {
//  try {
//    const user = await db.update(req.params.id, req.body);
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({
//         message: `The quiz ${id} doesn't exist`
//       })
//     }
//  } catch (err) {
//    console.log(err);
//    res.status(500).json({
//      message: 'An error has occurred, no quiz was logged'
//    });
//  }
// });

//Check
// router.put('/quizzes/:id', (req, res) => {
//   db.update(req.params.id, req.body)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err =>
//       res.status(500).json(err));
// });

router.get("/teachers/:id/quizzes", async (req, res) => {
  try {
    const quizzes = await db.getQuizByTeacher(req.params.id);

    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/student/:id/quizzes", async (req, res) => {
  try {
    const quizzes = await db.getQuizByStudent(req.params.id);

    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/student/completedtest", async (req, res) => {
  try {
    const quizzes = await db.testCompleted(req.body);

    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/quizzes/correct_answer/:id", async (req, res) => {
  try {
    const quizzes = await db.correctAnswers(req.params.id);

    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
