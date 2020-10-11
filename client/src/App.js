import React from 'react';
import Web3 from 'web3'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Loading from './components/Loading/Loading';
import Nav from './components/Nav/Nav';
import avocado from './avocado.svg';

import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './todoList-config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      taskCount: 0,
      tasks: [],
      loading: true
    }

    this.createTask = this.createTask.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ todoList })
    const taskCount = await todoList.methods.taskCount().call()
    this.setState({ taskCount })
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call()
      this.setState({
        tasks: [...this.state.tasks, task]
      })
    }
    this.setState({ loading: false })
  }

  createTask(content) {
    this.setState({ loading: true });
    this.state.todoList.methods.createTask(content).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.loadBlockchainData();
      });
  }

  toggleCompleted(taskId) {
    this.setState({ loading: true });
    this.state.todoList.methods.toggleCompleted(taskId).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.loadBlockchainData();
      });
  }

  render() {
    return (
      <div className="App">

        <Nav account={this.state.account} />

        <TodoForm
          addTask={this.createTask}
        />

        {this.state.loading
          ? <Loading />
          : <TodoList
            tasks={this.state.tasks}
            addTask={this.createTask}
            toggleCompleted={this.toggleCompleted} />
        }
      </div>
    );
  }
}

export default App;