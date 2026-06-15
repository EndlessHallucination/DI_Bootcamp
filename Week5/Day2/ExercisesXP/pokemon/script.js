const randomBtn = document.getElementById("randomBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const image = document.getElementById("image");
const nameEl = document.getElementById("name");
const idEl = document.getElementById("id");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const typeEl = document.getElementById("type");
const loading = document.getElementById("loading");

let currentPokemonId = 1;

function displayPokemon(data) {
  image.src = data.sprites.front_default;
  nameEl.textContent = data.name;
  idEl.textContent = data.id;
  heightEl.textContent = data.height;
  weightEl.textContent = data.weight;
  typeEl.textContent = data.types.map((type) => type.type.name).join(", ");
}

async function fetchPokemon(id) {
  try {
    loading.textContent = "Loading...";

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();

    displayPokemon(data);

    currentPokemonId = data.id;

    loading.textContent = "";
  } catch (error) {
    loading.textContent = "Oh no! That Pokemon isn’t available...";
  }
}

async function randomPokemon() {
  const randomId = Math.floor(Math.random() * 1025) + 1;

  await fetchPokemon(randomId);
}

randomBtn.addEventListener("click", randomPokemon);

async function previousPokemon() {
  if (currentPokemonId > 1) {
    await fetchPokemon(currentPokemonId - 1);
  }
}

prevBtn.addEventListener("click", previousPokemon);

async function nextPokemon() {
  await fetchPokemon(currentPokemonId + 1);
}

nextBtn.addEventListener("click", nextPokemon);
