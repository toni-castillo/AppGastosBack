const router = require('express').Router();
const tripModel = require('../../models/trip.model');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  res.send('Estoy en /trips');
});

router.post('/create',
  async (req, res) => {

    const errors = req;
    if (!errors) {
      return res.status(400).json(errors.array());
    }
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



