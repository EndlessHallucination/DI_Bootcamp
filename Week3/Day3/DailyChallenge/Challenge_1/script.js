const form = document.getElementById("libform");
const story = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle");

let savedValues = null;

function generateStory(values) {
  const stories = [
    `${values.person} went to ${values.place} with a ${values.adjective} ${values.noun} and started to ${values.verb} all day.`,

    `One day, ${values.person} found a ${values.adjective} ${values.noun} in ${values.place}. Suddenly it began to ${values.verb}.`,

    `In ${values.place}, a ${values.adjective} ${values.noun} asked ${values.person} to ${values.verb} immediately.`,
  ];

  const randomIndex = Math.floor(Math.random() * stories.length);

  story.textContent = stories[randomIndex];
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;

  if (
    noun === "" ||
    adjective === "" ||
    person === "" ||
    verb === "" ||
    place === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  savedValues = {
    noun,
    adjective,
    person,
    verb,
    place,
  };

  generateStory(savedValues);
});

shuffleBtn.addEventListener("click", function () {
  if (savedValues) {
    generateStory(savedValues);
  } else {
    alert("Please create a story first!");
  }
});
