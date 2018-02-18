import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';

const Icon = styled.i`
  color: ${({ color }) => colors[color]};
  padding: 0 4px;
  font-size: ${({ size }) => size}px;
`;

const IconComponent = ({ icon, color, size }) => (
  <Icon className="material-icons" color={color} size={size}>
    {icon}
  </Icon>
);

IconComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default IconComponent;

