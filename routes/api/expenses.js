const router = require('express').Router();
const expenseModel = require('../../models/expense.model');
const userModel = require('../../models/user.model');
const { validationResult } = require('express-validator');
const { getUserId } = require('../../helpers/utils');
const { createExpenseValidators } = require('../../helpers/validators');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' });
const fs = require('fs');


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
  createExpenseValidators(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);
    let user = await userModel.getById(userId);
    let name = user.name;
    let surname = user.surname;

    console.log('req.body', req.body);
    console.log('req.file', req.file);

    if (req.file) {
      const extension = '.' + req.file.mimetype.split('/')[1];
      const newFileName = req.file.filename + '-User' + userId + extension;
      const newPath = req.file.path + '-User' + userId + extension;
      console.log('newPath', newPath);
      fs.renameSync(req.file.path, newPath);

      req.body.attached = newFileName;
    }


    try {
      const result = await expenseModel.create(req.body, name, surname, userId);
      const expense = await expenseModel.getById(result.insertId);
      res.json(expense);
    } catch (error) {
      res.json({ error: error.message });
    }
  });

router.put('/:expenseId',
  createExpenseValidators(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const expense = expenseModel.updateById(req.params.expenseId, req.body);
      res.json(expense);
    } catch (error) {
      res.json({ error: error.message });
    }
  });

router.delete('/delete', (req, res) => {
  try {
    const expense = expenseModel.deleteOne(req.body.id);
    res.json(expense);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;