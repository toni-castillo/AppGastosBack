const router = require('express').Router();
const userModel = require('../../models/user.model');
const { createToken } = require('../../helpers/middlewares');

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
    fullName: `${user.name} ${user.surname}`,
  })
});



module.exports = router;