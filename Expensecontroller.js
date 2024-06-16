const Expense = require('../models/Expense');

exports.addExpense = async(req, res) => {
    const { category, amount, comments } = req.body;
    const expense = new Expense({
        user: req.user._id,
        category,
        amount,
        comments,
    });

    const createdExpense = await expense.save();
    res.status(201).json(createdExpense);
};

exports.getExpenses = async(req, res) => {
    const expenses = await Expense.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(expenses);
};

exports.editExpense = async(req, res) => {
    const { id } = req.params;
    const { category, amount, comments } = req.body;

    const expense = await Expense.findById(id);

    if (expense) {
        expense.category = category;
        expense.amount = amount;
        expense.comments = comments;

        const updatedExpense = await expense.save();
        res.json(updatedExpense);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
};

exports.deleteExpense = async(req, res) => {
    const { id } = req.params;

    const expense = await Expense.findById(id);

    if (expense) {
        await expense.remove();
        res.json({ message: 'Expense removed' });
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
};