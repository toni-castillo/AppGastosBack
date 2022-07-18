const router = require('express').Router();

const usersApiRouter = require('./api/users');
const expensesApiRouter = require('./api/expenses');
const purchasesApiRouter = require('./api/purchases');
const trainingsApiRouter = require('./api/trainings');
const tripsApiRouter = require('./api/trips');
const generalValidatorApiRouter = require('./api/generalValidator');
const generalEmployeeApiRouter = require('./api/generalEmployee');
const { checkToken, checkRole } = require('../helpers/middlewares');


router.use('/users', usersApiRouter);
router.use('/expenses', checkToken, checkRole('employee'), expensesApiRouter);
router.use('/purchases', checkToken, checkRole('employee'), purchasesApiRouter);
router.use('/trainings', checkToken, checkRole('employee'), trainingsApiRouter);
router.use('/trips', checkToken, checkRole('employee'), tripsApiRouter);
router.use('/generalvalidator', checkToken, checkRole('validator'), generalValidatorApiRouter);
router.use('/generalemployee', checkToken, checkRole('employee'), generalEmployeeApiRouter);


module.exports = router;