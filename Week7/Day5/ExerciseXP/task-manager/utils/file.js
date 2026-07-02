const fs = require("fs").promises;

const FILE = "./tasks.json";

async function readTasks() {
  const data = await fs.readFile(FILE, "utf-8");
  return JSON.parse(data);
}

async function writeTasks(tasks) {
  await fs.writeFile(FILE, JSON.stringify(tasks, null, 2));
}

module.exports = {
  readTasks,
  writeTasks,
};
