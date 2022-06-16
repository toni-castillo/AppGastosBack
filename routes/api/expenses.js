const router = require('express').Router();
const expenseModel = require('../../models/expense.model');

router.get('/', (req, res) => {
  res.send('Estoy en /expenses');
});

router.post('/create', (req, res) => {
  res.send('Estoy en /expenses/create');
});

router.put('/edit', (req, res) => {
  res.send('Estoy en /expenses/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /expenses/delete');
});

module.exports = router;