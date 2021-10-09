import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import NewTransaction from './components/NewTransaction';
import Scroll from './components/Scroll';

function App() {
  return (
    <>
    <div className="tc f3">
      <Header />
      <Balance balance={50.05} />
      <TransactionHistory />
      <NewTransaction />
      <Scroll />      

    </div>
    </>
  );
}

export default App;
