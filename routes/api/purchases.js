const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Estoy en /purchases');
});

router.post('/create', (req, res) => {
  res.send('Estoy en /purchases/create');
});

router.put('/edit', (req, res) => {
  res.send('Estoy en /purchases/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /purchases/delete');
});

module.exports = router;