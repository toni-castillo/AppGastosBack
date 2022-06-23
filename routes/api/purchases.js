const router = require('express').Router();
const purchaseModel = require('../../models/purchases.model');

router.get('/', (req, res) => {
  res.send('Estoy en /purchases');
});

router.post('/create', async (req, res) => {
  try {
    const purchase = await purchaseModel.create(req.body);
    res.json(purchase);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.put('/edit', (req, res) => {
  res.send('Estoy en /purchases/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /purchases/delete');
});

module.exports = router;