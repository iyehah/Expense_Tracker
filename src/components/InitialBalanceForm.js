import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const InitialBalanceForm = () => {
  const [balance, setBalance] = useState('');
  const { setInitialBalance } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setInitialBalance(parseFloat(balance));
    setBalance('');
  };

  return (
    <div className='initial'>
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        placeholder="Initial Balance"
        required
      />
      <button type="submit">Set Balance</button>
    </form>
    </div>
  );
};

export default InitialBalanceForm;
