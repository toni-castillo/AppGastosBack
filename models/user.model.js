const { executeQuery, executeQueryOne } = require("../helpers/executeQueries")

const getByEmail = (email) => {
  return executeQueryOne('SELECT * FROM appgastos.users WHERE email = ?', [email]);
}

const getAll = () => {
  return executeQuery('select * from appgastos.users');
}

const getById = (userId) => {
  return executeQueryOne('select * from appgastos.users where id = ?', [userId]);
}

const comparePassword = (passwordLogin) => {
  return executeQueryOne('SELECT * FROM appgastos.users WHERE password = ?', [passwordLogin]);
}

module.exports = {
  getByEmail, comparePassword, getAll, getById
}