const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const create = ({ date_request, department, project_code, reason, date_expense, type, amount, attached }, name, surname, users_id) => {
  return executeQuery('INSERT INTO appgastos.expenses (date_request, name, surname, department, project_code, reason, date_expense, type, amount, attached, general_type, users_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [date_request, name, surname, department, project_code, reason, date_expense, type, amount, attached, "Gasto", users_id]);
}

const getAll = () => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE general_type = "Gasto"');
}

const getOne = (id) => {
  return executeQueryOne('SELECT * FROM appgastos.expenses WHERE id = ?', [id]);
}

const getById = (expenseId) => {
  return executeQueryOne('SELECT * FROM appgastos.expenses where id = ?', [expenseId]);
}

const updateById = (expenseId, { date_request, department, project_code, reason, date_expense, type, amount, attached }) => {
  return executeQuery('UPDATE appgastos.expenses SET date_request = ?, department = ?, project_code = ?, reason = ?, date_expense = ?, type = ?, amount = ?, attached = ?, is_accepted= ? WHERE id = ?', [date_request, department, project_code, reason, date_expense, type, amount, attached, "Pendiente", expenseId]);
}

const deleteOne = (expenseId) => {
  return executeQuery('DELETE FROM appgastos.expenses WHERE id = ?', [expenseId]);
}

module.exports = {
  create, getAll, getOne, getById, updateById, deleteOne
}