const router = require('express').Router();
const generalValidatorModel = require('../../models/generalValidator.model');
const userModel = require('../../models/user.model');
const { getUserId } = require('../../helpers/utils');

router.get('/', async (req, res) => {
  let userId = getUserId(req);
  let user = await userModel.getById(userId);
  let department = user.department;
  let expensesByDepartment = [];

  expensesByDepartment = await generalValidatorModel.getByDepartment(department);
  res.json(expensesByDepartment);
});

router.get('/:expenseId',
  async (req, res) => {
    try {
      const result = await generalValidatorModel.getById(req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  }
);

router.put('/:expenseId',
  async (req, res) => {
    try {
      const result = await generalValidatorModel.updateById(req.body.isAccepted, req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  });

router.put('/:expenseId/refused',
  async (req, res) => {
    try {
      const result = await generalValidatorModel.updateByIdNote(req.body.validator_note, req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  });

module.exports = router;