import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { FaPlus, FaList } from 'react-icons/fa';

const Header = ({ togglePopup, toggleExpenseList }) => {
  const { initialBalance, expenses } = useContext(ExpenseContext);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBalance = initialBalance - totalExpenses;

  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h2>Balance: <span className={remainingBalance < 0 ? 'red' : ''}>{remainingBalance.toFixed(2)}</span> UMR</h2>
      </div>
      <div className="header-buttons">
        <button onClick={togglePopup}><FaPlus /> Add Expense</button>
        <button onClick={toggleExpenseList}><FaList /> Show Expenses</button>
      </div>
    </header>
  );
};

export default Header;
