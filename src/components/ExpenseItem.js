import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <strong>{expense.name}</strong> {expense.amount} UMR
    </li>
  );
};

export default ExpenseItem;
