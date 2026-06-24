const axios = require("axios");

async function getData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data;
}

module.exports = getData();
