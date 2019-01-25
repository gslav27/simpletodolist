import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Add from '@material-ui/icons/Add';
import AddCircle from '@material-ui/icons/AddCircle';

import UserInteractionHandlersHOC from '../../hocs/UserInteractionHandlersHOC';
import Button from '../UI/Button';
import theme from '../../utilities/themes';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  cursor: pointer;
  align-items: center;
  margin-top: 15px;
`;

const Label = styled.label`
  margin-left: 5px;
  color: ${({ mouseOver, theme }) => (mouseOver ? theme.colors.active : theme.colors.inactive)};
  cursor: pointer;
  font-size: 0.8em;
  text-transform: uppercase;
`;


const AddTaskButton = props => (
  <Container
    onClick={props.onClick}
    {...props.handlers}
  >
    <Button
      id='AddTaskButton'
      add
      type='button'
    >
      {
        props.userOver
          ? <AddCircle fontSize='large' nativeColor={theme.colors.active} />
          : <Add fontSize='large' nativeColor={theme.colors.active} />
      }
    </Button>
    <Label htmlFor='AddTaskButton' mouseOver={props.userOver}>Add Task</Label>
  </Container>
);


AddTaskButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  userOver: PropTypes.bool.isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
};


export default UserInteractionHandlersHOC(AddTaskButton);
