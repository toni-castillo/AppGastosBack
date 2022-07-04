const jwt = require('jsonwebtoken');

//RECUPERACIÓN DEL USUARIO ID 
const getUserId = (req) => {
    let headers = req.headers;
    let reqToken = headers.authorization;
    let tokenJson = jwt.decode(reqToken)
    return tokenJson.id_user
}

module.exports = { getUserId }