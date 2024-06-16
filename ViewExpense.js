import React, { useState, useEffect } from 'react';
import API from '../api';

const ViewExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async() => {
            const { data } = await API.get('/expenses');
            setExpenses(data);
        };

        fetchExpenses();
    }, []);

    return ( <
        table >
        <
        thead >
        <
        tr >
        <
        th > Category < /th> <
        th > Amount < /th> <
        th > Created At < /th> <
        th > Updated At < /th> <
        th > Comments < /th> <
        /tr> <
        /thead> <
        tbody > {
            expenses.map((expense) => ( <
                tr key = { expense._id } >
                <
                td > { expense.category } < /td> <
                td > { expense.amount } < /td> <
                td > { new Date(expense.createdAt).toLocaleString() } < /td> <
                td > { new Date(expense.updatedAt).toLocaleString() } < /td> <
                td > { expense.comments } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table>
    );
};

export default ViewExpenses;