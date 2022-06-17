const { executeQuery, executeQueryOne } = require("../helpers")

const getByEmail = (email) => {
  return executeQueryOne('SELECT * FROM appgastos.users WHERE email = ?', [email]);
}

const comparePassword = (passwordLogin) => {
  return executeQueryOne('SELECT * FROM appgastos.users WHERE password = ?', [passwordLogin]);
}


module.exports = {
  getByEmail, comparePassword
}