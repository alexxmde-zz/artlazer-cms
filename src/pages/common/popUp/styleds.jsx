import styled from 'styled-components';
import Column from '../responsive/column';
import Row from '../responsive/row';
import colors from '../styles/colors';
import { ERROR, INFO, SUCCESS } from '../../../constants/popup';

export const PopUpBox = Column.extend`
  background-color: ${colors.white};
  box-shadow: 1px 1px ${colors.grey['300']};
  position: absolute;
`;

export const TitleBox = Row.extend`
  padding: 8px 16px;
  color: colors.white;
  background-color: ${({ type }) => {
    switch (type) {
      case ERROR:
        return colors.red['400'];
      case INFO:
        return colors.blue['300'];
      case SUCCESS:
        return colors.green['300'];
      default:
        return colors.grey['300'];
    }
  }}`;

export const TextBox = Row.extend`
  padding: 8px 16px;
  font-size: 14px;
  color: colors.grey['600'];
  background-color: colors.white;
`;

export const Title = styled.h1`
  font-size:18px;
  padding: 0;
  margin: 0;
  color: ${colors.white};
`;

