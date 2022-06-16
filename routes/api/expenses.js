const router = require('express').Router();

router.get('/', (req, res) => {
  res.end('Estoy en /expenses');
});

router.post('/create', (req, res) => {
  res.end('Estoy en /expenses/create');
});

router.put('/edit', (req, res) => {
  res.end('Estoy en /expenses/edit');
});

router.delete('/delete', (req, res) => {
  res.end('Estoy en /expenses/delete');
});