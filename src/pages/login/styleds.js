import styled from 'styled-components';
import colors from '../common/styles/colors';
import Row from '../common/responsive/row';
import Column from '../common/responsive/column';

export const LoginBox = styled.div`
  background-color: ${colors.white};
  padding: 28px 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey['300']};
  border-radius: 3px;
  max-width: 350px;
  width: 100%;
  box-shadow: 4px 4px ${colors.grey['100']};
`;

export const Form = styled.form`
  width: 100%;
`;

export const TitleColumn = Column.extend`
  margin-top: 20px;
`;

export const LoginContainer = Row.extend`
  align-items: center;
  justify-content: center;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: 96px;
  max-height: 96px;
`;

export const ButtonRow = Row.extend`
  margin-top: 20px;
`;

export const Header = Row.extend`
`;
