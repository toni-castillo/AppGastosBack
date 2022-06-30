const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const executeQuery = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

const executeQueryOne = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) return resolve(null);
      resolve(result[0]);
    });
  });
}

const createToken = (user) => {
  const obj = {
    id_user: user.id,
    expiration_date: dayjs().add(1, 'week').unix()
  }
  return jwt.sign(obj, process.env.SECRET_KEY);
}

//RECUPERACIÓN DEL USUARIO ID 
const getUserId = (req) => {
  let headers = req.headers;
  let reqToken = headers.authorization;
  let tokenJson = jwt.decode(reqToken)
  return tokenJson.id_user
}

module.exports = {
  executeQuery, executeQueryOne, createToken, getUserId
}