import React, { useState, useEffect } from 'react';
import Web3 from 'web3'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Loading from './components/Loading/Loading';
import Nav from './components/Nav/Nav';
import './App.scss';


import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './todoList-config';

function App() {
  const [ account, setAccount ] =     useState('');
  const [ taskCount, setTaskCount ] = useState(0);
  const [ tasks, setTasks ] =         useState([]);
  const [ loading, setLoading ] =     useState(false);
  const [ todoList, setTodoList ] =   useState();


  useEffect( () => {
    async function loadBlockchainData() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
      setTodoList(todoList);
      const taskCount = await todoList.methods.taskCount().call();
      setTaskCount(taskCount);
      for (let i = 1; i <= taskCount; i++) {
        let task = await todoList.methods.tasks(i).call()
        setTasks(tasks => [...tasks, task]);
      }
    }
    loadBlockchainData();

  }, []);

  async function updateTasks() {
    const taskCount = await todoList.methods.taskCount().call();
    setTasks([]);
    for (let i = 1; i <= taskCount; i++) {
      let task = await todoList.methods.tasks(i).call()
      setTasks(tasks => [...tasks, task]);
    }
    setLoading(false);
  }

  async function createTask(content) {
    setLoading(true);
    await todoList.methods.createTask(content).send({ from: account })
      .once('receipt', (receipt) => {
        updateTasks();
      });
  }

  async function toggleCompleted(taskId) {
    setLoading(true);
    console.log(todoList.methods)
    await todoList.methods.toggleCompleted(taskId).send({ from: account })
      .once('receipt', (receipt) => {
        updateTasks();
      });
  }

  return (
    <div className="App">

      <Nav account={account} />

      <TodoForm addTask={ createTask }/>

      {loading
        ? <Loading />
        : <TodoList
            taskCount={ taskCount }
            tasks={ tasks }
            toggleCompleted={ toggleCompleted } />
      }

    </div>
  );
}

export default App;