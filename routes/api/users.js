const router = require('express').Router();
const userModel = require('../../models/user.model');
const { createToken } = require('../../helpers/middlewares');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

router.get('/', async (req, res) => {
  const users = await userModel.getAll();
  res.json(users)
});

router.post('/login', async (req, res) => {
  const user = await userModel.getByEmail(req.body.email);

  if (!user) {
    return res.status(401).json({ error: 'Error en usuario/a y/o contraseña' });
  }

  const isValid = await userModel.comparePassword(req.body.password, user.id);

  if (!isValid) {
    return res.status(401).json({ error: 'Error en usuario/a y/o contraseña' });
  }

  res.json({
    success: '¡Has iniciado sesión correctamente!',
    token: createToken(user),
    role: user.role,
    name: user.name,
    surname: user.surname
  }
  )
});

router.get('/profile', async (req, res) => {
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

  if (dayjs().unix() > obj.expiration_date) {
    return res.status(401).json({ error: 'El token ha expirado' });
  }

  const user = await userModel.getById(obj.id_user);
  res.json(user);
});

//* PRUEBA
router.get('/role', async (req, res) => {
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

  if (dayjs().unix() > obj.expiration_date) {
    return res.status(401).json({ error: 'El token ha expirado' });
  }

  const user = await userModel.getById(obj.id_user);
  res.json(user.role);
});

module.exports = router;