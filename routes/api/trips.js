const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Estoy en /trips');
});

router.post('/create', (req, res) => {
  res.send('Estoy en /trips/create');
});

router.put('/edit', (req, res) => {
  res.send('Estoy en /trips/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /trips/delete');
});

module.exports = router;