import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [initialBalance, setInitialBalance] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, initialBalance, addExpense, setInitialBalance, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
