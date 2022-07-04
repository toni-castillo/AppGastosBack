const { executeQuery, executeQueryOne } = require("../helpers/middlewares")

const create = ({ nombre, username, email, password }) => {
  return executeQuery();
}

module.exports = {
  create
}