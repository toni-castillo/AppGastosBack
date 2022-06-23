const { executeQuery, executeQueryOne } = require("../helpers")

const create = ({ date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, type }) => {
  return executeQuery('INSERT INTO appgastos.expenses (date_request, name, surname, department, project_code, reason, date_expense, product_link, provider, units, amount, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [date_request, name, surname, department, project_code, reason, STR_TO_DATE(date_expense, "%Y-%m-%d %H:%i:%s"), product_link, provider, units, amount, "purchase"]);
}

module.exports = {
  create
}