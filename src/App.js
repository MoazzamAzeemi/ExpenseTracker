import React from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory';
import NewTransaction from './NewTransaction';

function App() {
  return (
    <>
    <div className="tc f3 bg-light-blue pa3 br4">
      <Header />
      <Balance balance={50-50} />
      <TransactionHistory />
      <NewTransaction />
      
    </div>
    </>
  );
}

export default App;
