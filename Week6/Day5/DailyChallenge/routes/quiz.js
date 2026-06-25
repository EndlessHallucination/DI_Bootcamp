const express = require("express");
const router = express.Router();
const questions = require("../data/questions");

let currentQuestion = 0;
let score = 0;

router.get("/", (req, res) => {
  if (currentQuestion >= questions.length) {
    return res.redirect("/quiz/score");
  }

  res.json({
    questionNumber: currentQuestion + 1,
    question: questions[currentQuestion].question,
  });
});

router.post("/", (req, res) => {
  const { answer } = req.body;

  if (currentQuestion >= questions.length) {
    return res.redirect("/quiz/score");
  }

  const correctAnswer = questions[currentQuestion].answer;

  let feedback;

  if (
    answer &&
    answer.trim().toLowerCase() === correctAnswer.toLowerCase()
  ) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Wrong! Correct answer: ${correctAnswer}`;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    return res.json({
      feedback,
      message: "Quiz finished!",
      score,
      next: "/quiz/score",
    });
  }

  res.json({
    feedback,
    nextQuestion: questions[currentQuestion].question,
  });
});

router.get("/score", (req, res) => {
  res.json({
    finalScore: `${score}/${questions.length}`,
  });
});

module.exports = router;