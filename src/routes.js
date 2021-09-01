const express = require('express');
const routes = express.Router()

//request, response
routes.get('/', (request, response) => {
  return response.sendFile(__dirname + "/views/index.html") //passando html pro server
})

module.exports = routes;
