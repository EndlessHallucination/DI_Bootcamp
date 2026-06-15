const button = document.getElementById("btn");
const characterInfo = document.getElementById("character-info");

function displayCharacter(character, homeworld) {
  characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Height:</strong> ${character.height}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Home World:</strong> ${homeworld}</p>
    `;
}

async function getCharacter() {
  characterInfo.innerHTML = `
        <h2>
            <i class="fa-solid fa-spinner fa-spin"></i>
            Loading...
        </h2>
    `;

  try {
    const randomId = Math.floor(Math.random() * 83) + 1;
    const response = await fetch(
      `https://www.swapi.tech/api/people/${randomId}`,
    );

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();

    const character = data.result.properties;

    const homeworldResponse = await fetch(character.homeworld);

    if (!homeworldResponse.ok) {
      throw new Error("Failed to fetch homeworld");
    }

    const homeworldData = await homeworldResponse.json();

    const homeworld = homeworldData.result.properties.name;

    displayCharacter(character, homeworld);
  } catch (error) {
    characterInfo.innerHTML = `
            <h2 style="color:red;">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Oh No! That person isn't available.
            </h2>
        `;
  }
}

button.addEventListener("click", getCharacter);
