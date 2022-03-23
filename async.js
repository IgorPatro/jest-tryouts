const axios = require("axios")

const fetchData = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((res) => res.data)

module.exports = fetchData
