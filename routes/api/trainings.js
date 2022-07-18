const router = require('express').Router();
const trainingModel = require('../../models/training.model');
const userModel = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator')
const { getUserId } = require('../../helpers/utils')
const { propertyCreateValidatorTraining } = require('../../helpers/validators')

router.get('/', async (req, res) => {
  let trainings = await trainingModel.getAll();
  res.json(trainings);

});

router.post('/create',

  propertyCreateValidatorTraining(),

  async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);
    let user = await userModel.getById(userId)
    let name = user.name;
    let surname = user.surname;

    try {
      const result = await trainingModel.create(req.body, name, surname, userId);
      const training = await trainingModel.getById(result.insertId)
      res.json(training);
    } catch (Err) {
      res.json({ Err });
    }
  }
);

router.put('/:trainingId',
  propertyCreateValidatorTraining(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const result = await trainingModel.updateById(req.params.trainingId, req.body);
      const training = await trainingModel.getById(req.params.trainingId);
      res.json(training);
    } catch (Err) {
      res.json({ Err });
    }
  });

router.delete('/:trainingId', async (req, res) => {

  const result = await trainingModel.deleteById(req.params.trainingId);
  if (result.affectedRows === 1) {
    res.json({ success: "Se ha borrado la formación" })
  } else {
    res.json({ error: "No se ha borrado la formación" });
  }

});

module.exports = router;
