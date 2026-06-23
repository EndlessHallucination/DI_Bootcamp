import { TodoList } from './todo.js';

const todos = new TodoList();

todos.addTask("Study Node.js");
todos.addTask("Go to gym");
todos.addTask("Buy groceries");

todos.completeTask("Go to gym");

todos.listTasks();