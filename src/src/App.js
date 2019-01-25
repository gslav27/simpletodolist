import React, { Fragment, Component } from 'react';
import uniqid from 'uniqid';

import AddTask from './containers/AddTask';
import Header from './components/Header';
import ToDoList from './components/ToDoList/ToDoList';

import RootStyle from './App.styles';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toDoList: [] };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleRemovedTask = this.handleRemovedTask.bind(this);
  }

  handleNewTask(text) {
    const newToDo = {
      id: uniqid(),
      date: new Date().toLocaleString(),
      text,
    };
    this.setState({ toDoList: [...this.state.toDoList, newToDo] });
  }

  handleRemovedTask(toDoId) {
    const newToDoList = this.state.toDoList.filter(({ id }) => id !== toDoId);
    this.setState({ toDoList: newToDoList });
  }

  render() {
    const { toDoList } = this.state;
    return (
      <Fragment>
        <RootStyle />
        <Header qty={toDoList.length} />
        {!!(toDoList.length) && <ToDoList tasks={toDoList} onChange={this.handleRemovedTask} /> }
        <AddTask onChange={this.handleNewTask} />
      </Fragment>
    );
  }
}
  

export default App;
