const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
    addExpense,
    getExpenses,
    editExpense,
    deleteExpense,
} = require('../controllers/expenseController');

router.route('/')
    .post(protect, addExpense)
    .get(protect, getExpenses);

router.route('/:id')
    .put(protect, editExpense)
    .delete(protect, deleteExpense);

module.exports = router;