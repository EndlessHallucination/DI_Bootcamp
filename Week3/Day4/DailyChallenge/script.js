const tasks = [];

const input = document.getElementById("input");
const list = document.querySelector(".listTasks");

function addTask(event) {
  event.preventDefault();

  const text = input.value;

  if (text.length > 0) {
    const task = {
      task_id: tasks.length,
      text: text,
      done: false,
    };

    tasks.push(task);

    const div = document.createElement("div");

    div.setAttribute("data-task-id", task.task_id);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = text;

    checkbox.addEventListener("change", doneTask);

    function doneTask() {
      task.done = checkbox.checked;

      if (task.done) {
        label.style.textDecoration = "line-through";
        label.style.color = "red";
      } else {
        label.style.textDecoration = "none";
        label.style.color = "black";
      }

      console.log(tasks);
    }

    deleteBtn.addEventListener("click", deleteTask);

    function deleteTask() {
      const index = tasks.findIndex((item) => item.task_id === task.task_id);

      tasks.splice(index, 1);
      div.remove();
      console.log(tasks);
    }

    div.appendChild(deleteBtn);
    div.appendChild(checkbox);
    div.appendChild(label);

    list.appendChild(div);

    input.value = "";
  }
}
