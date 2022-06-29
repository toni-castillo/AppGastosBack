const router = require('express').Router();
const tripModel = require('../../models/trip.model');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator')

router.get('/', (req, res) => {
  res.send('Estoy en /trips');
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
  body('hotel')
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
  body('km')
    .exists()
    .withMessage('El campo es obligatorio')
    .isNumeric()
    .withMessage('El campo tiene que ser un número'),
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

    //RECUPERACIÓN DEL USUARIO ID 
    let headers = req.headers;
    let reqToken = headers.authorization;
    let tokenJson = jwt.decode(reqToken)
    let userId = tokenJson.id_user

    try {
      const result = await tripModel.create(req.body, userId);
      res.json(result);
    } catch (Err) {
      res.json({ Err });
    }
  }
);



router.put('/edit', (req, res) => {
  res.send('Estoy en /trips/edit');
});

router.delete('/delete', (req, res) => {
  res.send('Estoy en /trips/delete');
});

module.exports = router;



