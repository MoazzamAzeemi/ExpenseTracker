import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import NewTransaction from './components/NewTransaction';

function App() {
  return (
    <>
    <div className="tc f3 bg-light-blue pa3 br4">
      <Header />
      <Balance balance={50-40} />
      <TransactionHistory />
      <NewTransaction />
      
    </div>
    </>
  );
}

export default App;
