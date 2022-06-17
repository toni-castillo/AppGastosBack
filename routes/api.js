const router = require('express').Router();

const usersApiRouter = require('./api/users');
const expensesApiRouter = require('./api/expenses');
// const purchasesApiRouter = require('./api/purchases');
// const trainingsApiRouter = require('./api/trainings');
// const tripsApiRouter = require('./api/trips');


router.use('/users', usersApiRouter);
router.use('/expenses', expensesApiRouter);
// router.use('/purchases', purchasesApiRouter);
// router.use('/trainings', trainingsApiRouter);
// router.use('/trips', tripsApiRouter);

module.exports = router;