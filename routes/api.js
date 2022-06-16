const router = require('express').Router();

const usersApiRouter = require('./api/users');
const expensesApiRouter = require('./api/expenses');

router.use('/api/users', usersApiRouter);
router.use('/api/expenses', expensesApiRouter);

module.exports = router;