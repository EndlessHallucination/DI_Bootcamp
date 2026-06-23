const fs = require("fs");

function readFile() {
  fs.readFile("./files/file-data.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data);
  });
}

module.exports = readFile;
