import React from 'react';
import PropTypes from 'prop-types';
import { PopUpBox, Title, TitleBox, TextBox } from './styleds';

export default class PopUp extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    status: PropTypes.string,
    popUpType: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    message: '',
    status: 'HIDDEN',
    popUpType: 'ERROR',
  }
  render() {
    const { title, message, status, popUpType } = this.props;
    return (
      <PopUpBox xsmall={12} medium={4} large={3}>
        <TitleBox type={popUpType}>
          <Title>{title}</Title>
          <i className='material-icons'>face</i>
      </TitleBox>
        <TextBox>{message}</TextBox>
      </PopUpBox>
    );
  }
}
