import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import calculateTotal from '../utils/calculateTotal';

const Summary = () => {
  const { expenses } = useContext(ExpenseContext);
  const totalExpenses = calculateTotal(expenses);

  return (
    <div className="summary">
      <h5>Total Expenses: {totalExpenses} UMR</h5>
    </div>

  );
};

export default Summary;
