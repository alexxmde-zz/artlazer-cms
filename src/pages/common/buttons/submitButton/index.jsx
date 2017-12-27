import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../base';
import colors from '../../styles/colors';

const SubmitButton = BaseButton.extend`
  background-color: ${colors.blue.a400};
  &:hover {
    background-color: ${colors.blue.a100}; 
  }
`;

const SubmitButtonContainer = ({ text }) => (
  <SubmitButton>{text}</SubmitButton>
);

SubmitButtonContainer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButtonContainer;
