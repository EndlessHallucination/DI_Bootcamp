export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({
      title: task,
      completed: false,
    });
  }

  completeTask(task) {
    const foundTask = this.tasks.find(
      (t) => t.title.toLowerCase() === task.toLowerCase(),
    );

    if (foundTask) {
      foundTask.completed = true;
    }
  }

  listTasks() {
    this.tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.title} - ${
          task.completed ? " Completed" : " Not completed"
        }`,
      );
    });
  }
}
