const { executeQuery, executeQueryOne } = require("../helpers")

const create = ({ date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, type }) => {
  return executeQuery('INSERT INTO appgastos.expenses (date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, general_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, "purchase"]);
}

module.exports = {
  create
}