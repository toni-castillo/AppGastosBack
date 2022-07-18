const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const getById = (expenseId) => {
  return executeQueryOne('select * from appgastos.expenses where id = ?', [expenseId]);
}

const getByEmployee = (userId) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE users_id = ?', [userId]);
}

module.exports = {
  getById, getByEmployee
}