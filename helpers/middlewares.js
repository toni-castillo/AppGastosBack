const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const userModel = require('../models/user.model');
const { getUserId } = require('./utils');


const createToken = (user) => {
  const obj = {
    id_user: user.id,
    expiration_date: dayjs().add(1, 'week').unix()
  }
  return jwt.sign(obj, process.env.SECRET_KEY);
}


const checkToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Tu petición debe incluir la cabecera Authorization' });
  }

  const token = req.headers.authorization;

  let obj;
  try {
    obj = jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return res.status(401).json({ error: 'El token no es válido' });
  }

  console.log(obj);

  if (dayjs().unix() > obj.expiration_date) {
    return res.status(401).json({ error: 'El token ha expirado' });
  }

  const user = await userModel.getById(obj.id_user);
  req.user = user;

  next();
}

const checkRole = (role) => {
  return async (req, res, next) => {
    let userId = getUserId(req);
    let user = await userModel.getById(userId);

    if (user.role == role) {
      next();
    } else {
      res.status(401).json({ error: 'No tienes permisos para realizar esta acción (checkRole)' });
    }
  }
}

module.exports = {
  createToken, checkToken, checkRole
}
