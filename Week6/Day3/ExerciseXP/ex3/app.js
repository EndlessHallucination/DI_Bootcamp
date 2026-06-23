import { readFile, writeFile } from "./fileManager.js";

async function main() {
  const content = await readFile("./Hello World.txt");

  console.log("Content of Hello World.txt:");
  console.log(content);

  await writeFile("./Bye World.txt", "Writing to the file");
}

main();
