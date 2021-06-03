import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [entredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    }


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    }

const submitHandler=(event)=>{
    event.preventDefault();

    const expenseData={
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(entredDate)
    };

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

};

    return (
        <form onSubmit={submitHandler}>  
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={entredDate}  min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;