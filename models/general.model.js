const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const getById = (expenseId) => {
  return executeQueryOne('select * from appgastos.expenses where id = ?', [expenseId]);
}

const getByDepartment = (department) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE department = ?', [department]);
}

const getByEmployee = (userId) => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE users_id = ?', [userId]);
}

const updateById = (is_accepted, id) => {
  return executeQueryOne('update appgastos.expenses set is_accepted =? where id = ?', [is_accepted, id]);
}

const updateByIdNote = (validator_note, id) => {
  return executeQueryOne('update appgastos.expenses set validator_note =? where id = ?', [validator_note, id]);
}

module.exports = {
  getByDepartment, getByEmployee, updateById, updateByIdNote, getById
}