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

module.exports = {
  executeQuery, executeQueryOne
}