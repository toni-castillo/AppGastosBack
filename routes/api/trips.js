const router = require('express').Router();
const tripModel = require('../../models/trip.model');
const userModel = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator')
const { getUserId } = require('../../helpers/utils')
const { propertyCreateValidatorTrips } = require('../../helpers/validators')

router.get('/', async (req, res) => {
  let trips = await tripModel.getAll();
  res.json(trips);

});

router.post('/create',

  propertyCreateValidatorTrips()

  , async (req, res) => {

    //RECUPERACIÓN DE ERRORES
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);
    let user = await userModel.getById(userId)
    let name = user.name;
    let surname = user.surname;
    let role = user.role;
    if (role !== "employee") {
      return res.status(401).json({ error: "No tienes permiso" })
    };

    try {
      const result = await tripModel.create(req.body, name, surname, userId);
      const trip = await tripModel.getById(result.insertId)
      res.json(trip);
    } catch (Err) {
      res.json({ Err });
    }
  }
);

router.put('/:tripId',
  propertyCreateValidatorTrips(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);
    let user = await userModel.getById(userId);
    let role = user.role;
    if (role !== "employee") {
      return res.status(401).json({ error: "No tienes permiso" })
    };

    try {
      const result = await tripModel.updateById(req.params.tripId, req.body);
      const trip = await tripModel.getById(req.params.tripId);
      res.json(trip);
    } catch (Err) {
      res.json({ Err });
    }
  });

router.delete('/:tripId', async (req, res) => {

  const result = await tripModel.deleteById(req.params.tripId);
  if (result.affectedRows === 1) {
    res.json({ success: "Se ha borrado el viaje" })
  } else {
    res.json({ error: "No se ha borrado el viaje" });
  }

});

module.exports = router;



