import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const AddExpenseForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addExpense({ name, amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense name"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
