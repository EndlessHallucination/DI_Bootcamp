const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");
const ul = nav.querySelector("ul");

const li = document.createElement("li");
const text = document.createTextNode("Logout");

li.appendChild(text);
ul.appendChild(li);
const first = ul.firstElementChild;
const last = ul.lastElementChild;

console.log(first.textContent);
console.log(last.textContent);