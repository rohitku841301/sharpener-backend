const express = require('express');
const router = express.Router();

const expenseRouter = require('../controllers/expense')

router.post('/expense-tracker', expenseRouter.postExpense)

router.get('/expense-tracker', expenseRouter.getExpense)

router.delete('/expense-tracker/:userId', expenseRouter.deleteExpense)

router.put('/expense-tracker/:userId', expenseRouter.editExpense)

module.exports = router