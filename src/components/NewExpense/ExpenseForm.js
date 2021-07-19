import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm =(props)=>{
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titleChnageHandler =(event)=>{

  setEnteredTitle(event.target.value);
}

const amountChnageHandler =(event)=>{

  setEnteredAmount(event.target.value);
}

const dateChnageHandler =(event)=>{

  setEnteredDate(event.target.value);
}

// on submit these things gonna happen 
const submitHandler =(event)=>{

event.preventDefault();  // prevent the default behaviour of submit button


// storing it in expedata object
const expenseData = {
  title: enteredTitle,
  amount: +enteredAmount,
  date: new Date(enteredDate),
};


props.onSaveExpenseData(expenseData);
//clear the input after the submit
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');


}


return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleChnageHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' value={enteredAmount}  onChange={amountChnageHandler} min='0.01' step='0.01' />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date'  value={enteredDate}   onChange={dateChnageHandler}  min='2019-01-01' max='2022-12-31' />
      </div>
    </div>
    <div className='new-expense__actions'>
    <button   onClick={props.onCancel} type="button"  >Cancel</button>
 
      <button type='submit'>Add Expense</button>
    </div>
  </form>
)

}

export default ExpenseForm;