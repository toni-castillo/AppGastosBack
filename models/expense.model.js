const { executeQuery, executeQueryOne } = require("../helpers")

const create = ({ nombre, username, email, password }) => {
  return executeQuery();
}

module.exports = {
  create
}