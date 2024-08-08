import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <strong>{expense}</strong> {expense.amount} UMR
    </li>
  );
};

export default ExpenseItem;
