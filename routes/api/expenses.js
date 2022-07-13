const router = require('express').Router();
const expenseModel = require('../../models/expense.model');
const userModel = require('../../models/user.model');
const { validationResult } = require('express-validator');
const { getUserId } = require('../../helpers/utils');
// TODO: Crear un expenses validator

router.get('/', async (req, res) => {
  try {
    const allExpenses = await expenseModel.getAll();
    res.json(allExpenses);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/create',
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);
    let user = await userModel.getById(userId);
    let name = user.name;
    let surname = user.surname;
    let role = user.role;
    if (role !== "employee") {
      return res.status(401).json({ error: "No tienes permiso" })
    };

    try {
      const result = await expenseModel.create(req.body, name, surname, userId);
      const purchase = await expenseModel.getById(result.insertId);
      res.json(purchase);
    } catch (error) {
      res.json({ error: error.message });
    }
  });

// TODO: Terminar resto de rutas
router.put('/edit', (req, res) => {
  res.send('Estoy en /expenses/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /expenses/delete');
});

module.exports = router;