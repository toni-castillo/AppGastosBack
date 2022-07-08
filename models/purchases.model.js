const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const create = ({ date_request, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type }, name, surname, users_id) => {
  return executeQuery('INSERT INTO appgastos.expenses (date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type, users_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, "purchase", users_id]);
}

const getAll = () => {
  return executeQuery('SELECT * FROM appgastos.expenses WHERE general_type = "purchase"');
}

const getOne = (id) => {
  return executeQueryOne('SELECT * FROM appgastos.expenses WHERE id = ?', [id]);
}

const getById = (purchaseId) => {
  return executeQueryOne('SELECT * FROM appgastos.expenses where id = ?', [purchaseId]);
}

const update = (purchaseId, { date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type }) => {
  return executeQuery('UPDATE appgastos.expenses SET date_request = ?, name = ?, surname = ?, department = ?, project_code = ?, reason = ?, date_expense = ?, product_link = ?, provider = ?, units = ?, amount = ?, general_type = ? WHERE id = ?', [date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type, purchaseId]);
}

const deleteOne = (purchaseId) => {
  return executeQuery('DELETE FROM appgastos.expenses WHERE id = ?', [purchaseId]);
}


// const create = ({ date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type }) => {
//   return executeQuery('INSERT INTO appgastos.expenses (date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, "purchase"]);
// }


module.exports = {
  create, getAll, getOne, getById, update, deleteOne
}