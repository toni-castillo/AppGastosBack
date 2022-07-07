const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const getByDepartment = (department) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE department = ?', [department]);
}

const getByEmployee = (userId) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE users_id = ?', [userId]);
}

module.exports = {
  getByDepartment, getByEmployee
}