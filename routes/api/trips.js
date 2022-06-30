const router = require('express').Router();
const tripModel = require('../../models/trip.model');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator')
const { getUserId } = require('../../helpers')

router.get('/', async (req, res) => {
  const trips = await tripModel.getAll();
  res.json(trips);;
});

router.post('/create',
  body('fechaSolicitud')
    .exists()
    .withMessage('El campo es obligatorio')
    .isDate()
    .withMessage('Debes introducir una fecha correcta'),
  body('departamento')
    .exists()
    .withMessage('El campo es obligatorio'),
  body('codigo')
    .exists()
    .withMessage('El campo es obligatorio')
    .isLength({ max: 20 })
    .withMessage('El campo no puede tener más de 20 caracteres'),
  body('motivoGasto')
    .exists()
    .withMessage('El campo es obligatorio')
    .isLength({ max: 400 })
    .withMessage('El campo no puede tener más de 20 caracteres'),
  body('fechaSalida')
    .exists()
    .withMessage('El campo es obligatorio')
    .isDate()
    .withMessage('Debes introducir una fecha correcta'),
  body('fechaRegreso')
    .exists()
    .withMessage('El campo es obligatorio')
    .isDate()
    .withMessage('Debes introducir una fecha correcta'),
  body('pernocta')
    .exists()
    .withMessage('El campo es obligatorio'),
  body('origen')
    .exists()
    .withMessage('El campo es obligatorio'),
  body('destino')
    .exists()
    .withMessage('El campo es obligatorio'),
  body('transporte')
    .exists()
    .withMessage('El campo es obligatorio'),
  body('importe')
    .exists()
    .withMessage('El campo es obligatorio')
    .isNumeric()
    .withMessage('El campo tiene que ser un número')

  , async (req, res) => {

    //RECUPERACIÓN DE ERRORES
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    let userId = getUserId(req);

    try {
      const result = await tripModel.create(req.body, "trip", userId);
      const trip = await tripModel.getById(result.insertId)
      res.json(trip);
    } catch (Err) {
      res.json({ Err });
    }
  }
);


router.put('/:tripId', async (req, res) => {

  let userId = getUserId(req);

  try {
    const result = await tripModel.updateById(req.params.tripId, req.body, "trip", userId);
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



