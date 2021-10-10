import React from 'react';
import './App.css';

import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import NewTransaction from './components/NewTransaction';
import Header from './components/Header';

function App() {
  return (
    <>
    <div className="tc f3 bg-light-blue pa3 br4">
      
      <Balance balance={50-50} />
      <TransactionHistory />
      <NewTransaction />
      <Header />
    </div>
    </>
  );
}

export default App;
