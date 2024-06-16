const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/expense-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});