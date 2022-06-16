const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Estoy en /users');
});

router.post('/create', (req, res) => {
  res.send('Estoy en /users/create');
});

router.put('/edit', (req, res) => {
  res.send('Estoy en /users/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /users/delete');
});

module.exports = router;