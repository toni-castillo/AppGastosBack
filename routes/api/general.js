const router = require('express').Router();
const generalModel = require('../../models/general.model');
const userModel = require('../../models/user.model');
const { getUserId } = require('../../helpers/utils');

router.get('/', async (req, res) => {
  let userId = getUserId(req);
  let user = await userModel.getById(userId);
  let role = user.role;
  let department = user.department;
  let expensesByUserId = [];
  let expensesByDepartment = [];

  // Si el role es employee - muestra todos los formularios que ha creado
  if (role === 'employee') {
    expensesByUserId = await generalModel.getByEmployee(userId);
    res.json(expensesByUserId);

    //Si el role es validator - muestra solo los formularios de su departamento
  } else {
    expensesByDepartment = await generalModel.getByDepartment(department);
    res.json(expensesByDepartment);
  }
});

router.get('/:expenseId',
  async (req, res) => {
    try {
      const result = await generalModel.getById(req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  }
);


router.put('/:expenseId',

  async (req, res) => {
    try {
      const result = await generalModel.updateById(req.body.isAccepted, req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  });


router.put('/:expenseId/refused',

  async (req, res) => {
    try {
      const result = await generalModel.updateByIdNote(req.body.validator_note, req.params.expenseId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  });
module.exports = router;