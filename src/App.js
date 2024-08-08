import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Summary from './components/Summary';
import InitialBalanceForm from './components/InitialBalanceForm';
import Popup from './components/Popup';
import { ExpenseProvider } from './context/ExpenseContext';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isExpenseListVisible, setIsExpenseListVisible] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  const toggleExpenseList = () => setIsExpenseListVisible(!isExpenseListVisible);

  return (
    <ExpenseProvider>
      <Header togglePopup={togglePopup} toggleExpenseList={toggleExpenseList} />
      <div className="container">
        <InitialBalanceForm />
        {isPopupOpen && (
          <Popup onClose={togglePopup}>
            <AddExpenseForm />
          </Popup>
        )}
        <Summary />
        {isExpenseListVisible && <ExpenseList />}
      </div>
    </ExpenseProvider>
  );
}

export default App;
