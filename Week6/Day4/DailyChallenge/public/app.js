const emojiEl = document.querySelector("#emoji");
const optionsEl = document.querySelector("#options");
const feedbackEl = document.querySelector("#feedback");
const scoreEl = document.querySelector("#score");

const form = document.querySelector("#guessForm");

async function loadQuestion() {
  const res = await fetch("/question");
  const data = await res.json();

  emojiEl.textContent = data.emoji;

  optionsEl.innerHTML = "";

  data.options.forEach((option) => {
    optionsEl.innerHTML += `
            <label>
                <input
                    type="radio"
                    name="guess"
                    value="${option}"
                    required
                >
                ${option}
            </label>
            <br>
        `;
  });
}

async function loadLeaderboard() {
  const res = await fetch("/leaderboard");
  const scores = await res.json();

  const list = document.querySelector("#leaderboard");

  list.innerHTML = scores
    .map((score) => `<li>${score.name}: ${score.score}</li>`)
    .join("");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const guess = document.querySelector('input[name="guess"]:checked').value;

  const res = await fetch("/guess", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ guess }),
  });

  const data = await res.json();

  feedbackEl.textContent = data.correct ? "✅ Correct!" : "❌ Wrong!";

  scoreEl.textContent = data.score;

  loadQuestion();
});

document.querySelector("#saveScore").addEventListener("click", async () => {
  const name = document.querySelector("#playerName").value;

  await fetch("/leaderboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  loadLeaderboard();
});

loadQuestion();
loadLeaderboard();
