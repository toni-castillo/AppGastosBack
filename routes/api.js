const router = require('express').Router();

// const usersApiRouter = require('./api/users');
const expensesApiRouter = require('./api/expenses');
// const purchasesApiRouter = require('./api/purchases');
// const trainingsApiRouter = require('./api/trainings');
// const tripsApiRouter = require('./api/trips');


// router.use('/api/users', usersApiRouter);
router.use('/expenses', expensesApiRouter);
// router.use('/api/purchases', purchasesApiRouter);
// router.use('/api/trainings', trainingsApiRouter);
// router.use('/api/trips', tripsApiRouter);

module.exports = router;