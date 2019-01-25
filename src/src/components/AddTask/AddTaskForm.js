import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Input = styled.input`
  font-size: 1em;
  flex: 1;
  padding: 2px 5px;
  height: 1.6em;
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
`;

const Button = styled.button`
  margin: 5px 5px 5px 0px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: ${({ active, theme }) => (active ? theme.colors.active : '#eee')};
  color: ${({ active, theme }) => (active ? '#fff' : theme.colors.inactive)};
  font-size: 1em;
  &:hover {
    cursor: pointer;
  };
`;


class AddTaskForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    if (text) {
      this.props.onSubmit(text);
      this.setState({ text: '' });
      return;
    }
    const alertTemplate = 'is required';
    if (!text) return alert(`"ToDo text" ${alertTemplate}`);
  }

  render() {
    const { text } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          id='newToDo'
          type='text'
          value={text}
          onChange={this.handleTextChange}
          placeholder='your new ToDo...'
          autoFocus
        />
        <ButtonsGroup>
          <Button
            active
            type='submit'
            name='submitNewToDo'
          >
            Add Task
          </Button>
          <Button
            type='button'
            onClick={this.props.onCancel}
          >
            Cancel
          </Button>
        </ButtonsGroup>
      </Form>
    );
  }
}

AddTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddTaskForm;
