import styled from 'styled-components';

function getWidthString(span) {
  const width = (span / 12) * 100;
  return `width: ${width}%;`;
}

function getMarginString(offset) {
  const margin = (offset / 12) * 100;
  return `margin-left: ${margin}%`;
}

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: flex-start;
 
  ${({ centerX, center }) => (centerX || center) && 'justify-content: center;'}
  ${({ centerY, center }) => (centerY || center) && 'align-items: center;'}
  
  ${({ xsmall }) => xsmall && getWidthString(xsmall)}
  ${({ xsmallOffset }) => xsmallOffset && getMarginString(xsmallOffset)}  

  @media only screen and (min-width: 600px) {
    ${({ small }) => small && getWidthString(small)}
    ${({ smallOffset }) => smallOffset && getMarginString(smallOffset)}  
  }

  @media only screen and (min-width: 960px) {
    ${({ medium }) => medium && getWidthString(medium)}
    ${({ mediumOffset }) => mediumOffset && getMarginString(mediumOffset)}  
  }

  @media only screen and (min-width: 1280px) {
    ${({ large }) => large && getWidthString(large)}
    ${({ largeOffset }) => largeOffset && getMarginString(largeOffset)}  
  }
`;

export default Column;
