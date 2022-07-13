const router = require('express').Router();

const usersApiRouter = require('./api/users');
const expensesApiRouter = require('./api/expenses');
const purchasesApiRouter = require('./api/purchases');
const trainingsApiRouter = require('./api/trainings');
const tripsApiRouter = require('./api/trips');
const generalApiRouter = require('./api/general');
const { checkToken } = require('../helpers/middlewares');


router.use('/users', usersApiRouter);
router.use('/expenses', checkToken, expensesApiRouter);
router.use('/purchases', checkToken, purchasesApiRouter);
router.use('/trainings', checkToken, trainingsApiRouter);
router.use('/trips', checkToken, tripsApiRouter);
router.use('/general', checkToken, generalApiRouter);

module.exports = router;