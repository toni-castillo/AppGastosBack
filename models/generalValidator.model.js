const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const getById = (expenseId) => {
  return executeQueryOne('select * from appgastos.expenses where id = ?', [expenseId]);
}

const getByDepartment = (department) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE department = ?', [department]);
}

const updateById = (is_accepted, id) => {
  return executeQueryOne('update appgastos.expenses set is_accepted =? where id = ?', [is_accepted, id]);
}

const updateByIdNote = (validator_note, id) => {
  return executeQueryOne('update appgastos.expenses set validator_note =? where id = ?', [validator_note, id]);
}

module.exports = {
  getById, getByDepartment, updateById, updateByIdNote
}