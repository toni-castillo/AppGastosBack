const router = require('express').Router();
const purchaseModel = require('../../models/purchases.model');
const { createPurchaseValidators } = require('../../helpers/validators');

router.get('/', async (req, res) => {
  try {
    const allPurchases = await purchaseModel.getAll();
    res.json(allPurchases);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/create',
  createPurchaseValidators(),
  async (req, res) => {
    try {
      const purchase = await purchaseModel.create(req.body);
      res.json(purchase);
    } catch (error) {
      res.json({ error: error.message });
    }
  });

router.put('/edit', (req, res) => {
  try {
    const purchase = purchaseModel.update(req.body.id, req.body);
    res.json(purchase);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete('/delete', (req, res) => {
  try {
    const purchase = purchaseModel.deleteOne(req.body.id);
    res.json(purchase);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;