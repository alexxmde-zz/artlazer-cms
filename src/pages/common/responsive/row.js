import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-basis: 100%;
  ${({ flexEnd }) => flexEnd && 'justify-content: flex-end;'}
  `;

export default Row;
