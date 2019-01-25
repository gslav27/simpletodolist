import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AddTaskForm from '../components/AddTask/AddTaskForm';
import AddTaskButton from '../components/AddTask/AddTaskButton';


class AddTask extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showAddTaskForm: false };
    this.handleCreateTaskClick = this.handleCreateTaskClick.bind(this);
    this.handleNewToDo = this.handleNewToDo.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCreateTaskClick(e) {
    e.preventDefault();
    this.setState({ showAddTaskForm: true });
  }

  handleNewToDo(text) {
    this.setState({ showAddTaskForm: false });
    this.props.onChange(text);
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ showAddTaskForm: false });
  }

  render() {
    const { showAddTaskForm } = this.state;
    return (
      showAddTaskForm
        ? <AddTaskForm onSubmit={this.handleNewToDo} onCancel={this.handleCancel} />
        : <AddTaskButton onClick={this.handleCreateTaskClick} />
    );
  }
}


AddTask.propTypes = { onChange: PropTypes.func.isRequired };

export default AddTask;
