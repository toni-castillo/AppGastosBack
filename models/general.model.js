const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const getByDepartment = (department) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE general_type = "purchase"');
}

module.exports = {
  create
}