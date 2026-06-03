const buttonsContainer = document.getElementById("buttons");

const sounds = [
  "kick",
  "snare",
  "hihat",
  "clap",
  "tom",
  "tink",
  "ride",
  "openhat",
  "boom"
];

function setButtons() {
  sounds.forEach(sound => {
    const button = document.createElement("button");

    button.innerText = sound;
    button.dataset.sound = sound;

    buttonsContainer.appendChild(button);

    button.addEventListener("click", function () {
      playSound(this.dataset.sound);
    });
  });
}

function playSound(soundName) {
  const audio = new Audio(`sounds/${soundName}.wav`);
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener("keydown", function (event) {
  const keyMap = {
    a: "kick",
    s: "snare",
    d: "hihat",
    f: "clap",
    g: "tom",
    h: "tink",
    j: "ride",
    k: "openhat",
    l: "boom"
  };

  const sound = keyMap[event.key];

  if (sound) {
    playSound(sound);
  }
});

setButtons();