import React, { useEffect, useState } from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';

import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './todoList-config';

function App() {
  const [ accounts, setAccounts ] = useState([]);
  useEffect( () => loadBlockchainData(), []);
  
  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accs = await web3.eth.getAccounts();
    setAccounts(accs);
  }


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { accounts.map( a => <li> {a} </li> ) } 
        </ul>
      </header>
    </div>
  );
}

export default App;
