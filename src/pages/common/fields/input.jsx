import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';
import Label from './label';
import { Error } from './styleds';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${({ first }) => (first ? '0' : '40px')};
  position: relative;
`;

const Input = styled.input`
  height: 35px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid ${({ error }) => (error ? colors.red.a400 : colors.grey['600'])};
  border-radius: 3px;

  &:focus {
    outline: none;
    caret-color: ${colors.blue['500']};
    border-bottom: 1px solid ${colors.blue['500']};
  }
`;

const InputField = ({
  meta: { error, touched, submitFailed },
  input, disabled, label, required, first,
}) => {
  const showError = (error && touched) || (error && submitFailed);
  const placeholder = showError ? '' : `${label}${required ? ' *' : ''}`;

  return (
    <InputContainer first={first}>
      {(input.value || showError) &&
      <Label
        text={label}
        required={required}
        error={showError}
      />}
      <Input
        type="text"
        disabled={disabled}
        error={showError}
        placeholder={placeholder}
        {...input}
      />
      {showError && <Error>{error}</Error>}
    </InputContainer>
  );
};

InputField.propTypes = {
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.touched,
    submitFailed: PropTypes.bool,
  }).isRequired,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.function,
  }).isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  first: PropTypes.bool,
};

InputField.defaultProps = {
  disabled: false,
  label: null,
  required: false,
  first: false,
};

export default InputField;
