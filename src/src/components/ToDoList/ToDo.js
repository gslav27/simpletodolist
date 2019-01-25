import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';

import UserInteractionHandlersHOC from '../../hocs/UserInteractionHandlersHOC';
import Button from '../UI/Button';

import theme from '../../utilities/themes';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
`;

const ToDoData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow: hidden;
`;

const Date = styled.span`
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.inactive};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 900;
  font-style: italic;
`;


const ToDo = ({ text, date, userOver, ...props }) => (
  <Container>
    <Button
      type='button'
      onClick={() => props.onChange(props.id)}
      {...props.handlers}
    >
      {
        userOver
          ? <CheckBox nativeColor={theme.colors.active} fontSize='inherit' />
          : <CheckBoxOutlineBlank fontSize='inherit' />
      }
    </Button>
    <ToDoData>
      <Date>{date}</Date>
      <Text>{text}</Text>
    </ToDoData>
  </Container>
);


ToDo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  userOver: PropTypes.bool.isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
};


export default UserInteractionHandlersHOC(ToDo);
