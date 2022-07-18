const router = require('express').Router();
const generalEmployeeModel = require('../../models/generalEmployee.model');
const { getUserId } = require('../../helpers/utils');

router.get('/', async (req, res) => {
  let userId = getUserId(req);
  let expensesByUserId = [];

  expensesByUserId = await generalEmployeeModel.getByEmployee(userId);
  res.json(expensesByUserId);
});

router.get('/:expenseId',
  async (req, res) => {
    try {
      const result = await generalEmployeeModel.getById(req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  }
);

module.exports = router;