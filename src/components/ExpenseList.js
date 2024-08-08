import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h4 className='ExpensesList'>Expenses</h4>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
