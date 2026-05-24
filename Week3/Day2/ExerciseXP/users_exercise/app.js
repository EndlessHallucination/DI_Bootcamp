const container = document.getElementById("container");
console.log(container);
const uls = document.querySelectorAll(".list");

uls[0].children[1].textContent = "Richard";
uls[1].children[1].remove();
for (let ul of uls) {
    ul.children[0].textContent = "Vasa";
}
for (let ul of uls) {
    ul.classList.add("student_list");
}
uls[0].classList.add("university", "attendance");
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";
uls[1].children[1].style.display = "none";
uls[0].children[1].style.border = "1px solid black";
document.body.style.fontSize = "20px";
if (container.style.backgroundColor === "lightblue") {
    const users = container.textContent;
    alert(`Hello ${users}`);
}