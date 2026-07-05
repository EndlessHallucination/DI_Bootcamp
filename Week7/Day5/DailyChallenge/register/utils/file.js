const fs = require("fs").promises;

const FILE = "./users.json";

async function readUsers() {
  const data = await fs.readFile(FILE, "utf-8");
  return JSON.parse(data);
}

async function writeUsers(users) {
  await fs.writeFile(FILE, JSON.stringify(users, null, 2));
}

module.exports = {
  readUsers,
  writeUsers,
};
