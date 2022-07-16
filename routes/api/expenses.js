const router = require('express').Router();
const expenseModel = require('../../models/expense.model');
const userModel = require('../../models/user.model');
const { validationResult } = require('express-validator');
const { getUserId } = require('../../helpers/utils');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' });
const fs = require('fs');

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
  upload.single('attached'),
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

    console.log('req.body', req.body);
    console.log('req.file', req.file);

    const extension = '.' + req.file.mimetype.split('/')[1];
    const newFileName = req.file.filename + extension;
    const newPath = req.file.path + '-User' + userId + extension;
    console.log('newPath', newPath);
    fs.renameSync(req.file.path, newPath);

    req.body.attached = newFileName;

    try {
      const result = await expenseModel.create(req.body, name, surname, userId);
      const expense = await expenseModel.getById(result.insertId);
      res.json(expense);
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