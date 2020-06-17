import React from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import {Form} from './form/components/Form';

function App() {
  return (
    <Router>
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Form />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

      <Route path='/form' exact component={Form}/>
    </GlobalProvider>
    </Router>
  );
}

export default App;
