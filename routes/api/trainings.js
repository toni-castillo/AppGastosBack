const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Estoy en /trinings');
});

router.post('/create', (req, res) => {
  res.send('Estoy en /trinings/create');
});

router.put('/edit', (req, res) => {
  res.send('Estoy en /trinings/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /trinings/delete');
});

module.exports = router;