const router = require('express').Router();
const purchaseModel = require('../../models/purchases.model');
const userModel = require('../../models/user.model');
const { validationResult } = require('express-validator');
const { getUserId } = require('../../helpers/utils');
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);
    let user = await userModel.getById(userId);
    let name = user.name;
    let surname = user.surname;

    try {
      const result = await purchaseModel.create(req.body, name, surname, userId);
      const purchase = await purchaseModel.getById(result.insertId);
      res.json(purchase);
    } catch (error) {
      res.json({ error: error.message });
    }
  });

router.put('/:purchaseId',
  createPurchaseValidators(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const purchase = purchaseModel.updateById(req.params.purchaseId, req.body);
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