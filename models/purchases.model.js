const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const create = ({ date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type }) => {
  return executeQuery('INSERT INTO appgastos.expenses (date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, "purchase"]);
}

const getAll = () => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE general_type = "purchase"');
}

const getOne = (id) => {
  return executeQueryOne('SELECT * FROM appgastos.expenses WHERE id = ?', [id]);
}

const update = (purchaseId, { date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type }) => {
  return executeQuery('UPDATE appgastos.expenses SET date_request = ?, name = ?, surname = ?, department = ?, project_code = ?, reason = ?, date_expense = ?, product_link = ?, provider = ?, units = ?, amount = ?, general_type = ? WHERE id = ?', [date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type, purchaseId]);
}

const deleteOne = (purchaseId) => {
  return executeQuery('DELETE FROM appgastos.expenses WHERE id = ?', [purchaseId]);
}

module.exports = {
  create, getAll, getOne, update, deleteOne
}