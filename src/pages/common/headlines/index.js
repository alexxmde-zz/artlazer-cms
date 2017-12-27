import styled from 'styled-components';
import colors from '../styles/colors';

const Base = styled.div`
  margin: 0;
  color: ${({ color }) => (color ? colors[color] : colors.grey[800])};
`;

export const HeadlineBig = Base.extend`
  font-size: 48px;
`;

export const HeadlineMedium = Base.extend`
  font-size: 36px;
`;
