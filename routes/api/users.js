const router = require('express').Router();
const userModel = require('../../models/user.model');
const { createToken } = require('../../helpers/executeQueries');

router.get('/', async (req, res) => {
  const users = await userModel.getAll();
  res.json(users)
});

router.post('/login', async (req, res) => {
  const user = await userModel.getByEmail(req.body.email);

  if (!user) {
    return res.status(401).json({ error: 'Error en usuario/a y/o contraseña1' });
  }

  const isValid = await userModel.comparePassword(req.body.password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: 'Error en usuario/a y/o contraseña2' });
  }

  res.json({
    success: '¡Has iniciado sesión correctamente!',
    token: createToken(user),
    role: user.role
  })

});

module.exports = router;