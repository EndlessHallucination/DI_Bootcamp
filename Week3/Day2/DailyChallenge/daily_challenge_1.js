const solarSystem = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "orange" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "brown" },
    { name: "Saturn", moons: 83, color: "gold" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "darkblue" }
];

const section = document.querySelector(".listPlanets");

for (let i = 0; i < solarSystem.length; i++) {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.textContent = solarSystem[i].name;
    planetDiv.style.backgroundColor = solarSystem[i].color;

    // moons
    for (let j = 0; j < solarSystem[i].moons; j++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");

        moon.style.top = `${Math.random() * 80}px`;
        moon.style.left = `${Math.random() * 80}px`;

        planetDiv.appendChild(moon);
    }

    section.appendChild(planetDiv);
}