import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../common/icon';
import { PopUpBox, Title, TitleBox, TextBox } from './styleds';
import { VISIBLE } from '../../../constants/popup';

const PopUp = ({
  title, message, status, popUpType,
}) => {
  if (status === VISIBLE) {
    return (
      <PopUpBox xsmall={12} medium={4} large={3}>
        <TitleBox type={popUpType}>
          <Icon icon="error" color="white" size={24} />
          <Title>{title}</Title>
        </TitleBox>
        <TextBox>{message}</TextBox>
      </PopUpBox>
    );
  }
  return null;
};

PopUp.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
  popUpType: PropTypes.string,
};

PopUp.defaultProps = {
  title: '',
  message: '',
  status: 'HIDDEN',
  popUpType: 'ERROR',
};

export default PopUp;
