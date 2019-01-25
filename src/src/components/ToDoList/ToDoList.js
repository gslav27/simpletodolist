import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToDo from './ToDo';


const Section = styled.section`
  border: 1px solid #aaa;
  border-left: none;
  border-right: none;
  padding: 5px 0px;
`;


const ToDoList = ({ tasks, onChange }) => (
  <Section>
    {
      tasks.map(toDo => (
        <ToDo
          key={toDo.id}
          onChange={onChange}
          {...toDo}
        />
      ))
    }
  </Section>
);


ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      date: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};


export default ToDoList;
