const axios = require("axios");

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/fagundesjg/fake_api"
});

module.exports = api;
