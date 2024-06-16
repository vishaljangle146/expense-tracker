import React, { useState } from 'react';
import API from '../api';

const AddExpense = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { data } = await API.post('/expenses', { category, amount, comments });
        console.log(data);
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Category"
        value = { category }
        onChange = {
            (e) => setCategory(e.target.value) }
        /> <
        input type = "number"
        placeholder = "Amount"
        value = { amount }
        onChange = {
            (e) => setAmount(e.target.value) }
        /> <
        textarea placeholder = "Comments"
        value = { comments }
        onChange = {
            (e) => setComments(e.target.value) }
        /> <
        button type = "submit" > Add Expense < /button> <
        /form>
    );
};

export default AddExpense;