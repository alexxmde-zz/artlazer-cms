import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import colors from '../styles/colors';

const rotate360 = keyframes`
  from {
    top: 20px;
    font-size: 16px;
  }

  to {
    top: -16px;
    font-size: 12px;
  }
`;

const LabelSpan = styled.span`
  position: absolute;
  top: -16px;
  color: ${({ error }) => (error ? colors.red.a400 : colors.grey[800])};
  font-weight: 400;
  font-size: 12px;
  animation: ${rotate360} 0.30s;
`;

export const Asterisk = styled.b`
  color: ${colors.red.a400};
  margin-left: 3px;
  font-size: 16px;
  font-weight: 400;
`;

const Label = ({ required, text, error }) => (
  <LabelSpan error={error}>
    {text}
    {required && <Asterisk>*</Asterisk>}
  </LabelSpan>
);

Label.propTypes = {
  required: PropTypes.bool,
  text: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

Label.defaultProps = {
  required: false,
  error: false,
};

export default Label;

