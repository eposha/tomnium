import styled from 'styled-components';

const CardLabel = styled.div<{
  $isPromo?: boolean;
}>`
  padding: 7.5px 10px;
  border-radius: 5px;
  background-color: ${({$isPromo, theme}) =>
    $isPromo ? theme.colors.secondary : theme.colors.primary};
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  pointer-events: none;
`;

export default CardLabel;
