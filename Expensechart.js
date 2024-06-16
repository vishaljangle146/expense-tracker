import React, { useState, useEffect } from 'react';
import API from '../api';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const { data: expenses } = await API.get('/expenses');
            const categoryData = expenses.reduce((acc, expense) => {
                acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
                return acc;
            }, {});

            const chartData = Object.entries(categoryData).map(([name, value]) => ({ name, value }));
            setData(chartData);
        };

        fetchData();
    }, []);

    return ( <
        PieChart width = { 400 }
        height = { 400 } >
        <
        Pie data = { data }
        cx = { 200 }
        cy = { 200 }
        outerRadius = { 80 }
        fill = "#8884d8"
        dataKey = "value" > {
            data.map((entry, index) => ( <
                Cell key = { `cell-${index}` }
                fill = { COLORS[index % COLORS.length] }
                />
            ))
        } <
        /Pie> <
        Tooltip / >
        <
        /PieChart>
    );
};

export default ExpenseChart;