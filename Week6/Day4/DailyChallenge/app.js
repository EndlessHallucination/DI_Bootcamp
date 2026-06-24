import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const emojis = [
  { emoji: "🐶", name: "Dog" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🐵", name: "Monkey" },
  { emoji: "🦁", name: "Lion" },
  { emoji: "🐸", name: "Frog" },
  { emoji: "🐼", name: "Panda" },
  { emoji: "🐰", name: "Rabbit" },
  { emoji: "🐯", name: "Tiger" },
];

let currentScore = 0;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function generateQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  const distractors = shuffle(
    emojis.filter((e) => e.name !== correct.name),
  ).slice(0, 3);

  const options = shuffle([correct.name, ...distractors.map((d) => d.name)]);

  return {
    emoji: correct.emoji,
    answer: correct.name,
    options,
  };
}

let currentQuestion = generateQuestion();

app.get("/question", (req, res) => {
  res.json({
    emoji: currentQuestion.emoji,
    options: currentQuestion.options,
  });
});

app.post("/guess", (req, res) => {
  const { guess } = req.body;

  const correct = guess === currentQuestion.answer;

  if (correct) {
    currentScore++;
  }

  currentQuestion = generateQuestion();

  res.json({
    correct,
    score: currentScore,
  });
});

app.get("/leaderboard", (req, res) => {
  if (!fs.existsSync("leaderboard.json")) {
    return res.json([]);
  }

  const scores = JSON.parse(fs.readFileSync("leaderboard.json"));

  res.json(scores);
});

app.post("/leaderboard", (req, res) => {
  const { name } = req.body;

  let scores = [];

  if (fs.existsSync("leaderboard.json")) {
    scores = JSON.parse(fs.readFileSync("leaderboard.json"));
  }

  scores.push({
    name,
    score: currentScore,
  });

  scores.sort((a, b) => b.score - a.score);

  scores = scores.slice(0, 10);

  fs.writeFileSync("leaderboard.json", JSON.stringify(scores, null, 2));

  currentScore = 0;

  res.json(scores);
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
