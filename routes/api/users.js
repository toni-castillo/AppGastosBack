const router = require('express').Router();
const userModel = require('../../models/user.model');
const { createToken } = require('../../helpers');

// router.get('/', async (req, res) => {
//   res.send('Hello World');
// });

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
  })

});

module.exports = router;