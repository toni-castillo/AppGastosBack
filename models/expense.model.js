const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const create = ({ nombre, username, email, password }) => {
  return executeQuery();
}

module.exports = {
  create
}