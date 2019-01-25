import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Title = styled.h2`
  margin-bottom: 0px;
  ${({ theme }) => theme.boldUppercaseMixin(theme.colors.text)};
`;

const SubTitle = styled.i`
  padding: 2px;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.inactive};
`;


const Header = ({ qty }) => (
  <header>
    <Title>ToDo list</Title>
    <SubTitle>You have {qty} task{qty === 1 ? '' : 's'}</SubTitle>
  </header>
);


Header.propTypes = { qty: PropTypes.number.isRequired };


export default Header;
