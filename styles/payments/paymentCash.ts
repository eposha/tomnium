import styled from 'styled-components';

export const InnerBankDetails = styled.div`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`;
