import styled from 'styled-components';
import {media} from 'styles/media';
import CommonButton from 'styles/common/Button';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-weight: 500;
  line-height: 1.2;
  border-radius: 5px;
  background-color: #fff;

  ${media.greaterThan('md')`
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 50px 30px 25px;
  `}
`;

export const TextContainer = styled.div`
  max-width: 420px;
  text-align: center;

  ${media.greaterThan('md')`
    text-align: left;
  `}
`;

export const BlockTitle = styled.h3`
  font-size: 12px;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
    font-size: 16px;
    margin: 0 0 5px 0;
  `}
`;

export const BlockText = styled.p`
  font-size: 10px;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 20px 0;

  ${media.greaterThan('md')`
    font-size: 12px;
    margin: 0;
  `}
`;

export const Button = styled(CommonButton)`
  min-width: 135px;
  flex: none;

  ${media.greaterThan('md')`
    min-width: 160px;
    
  `}
`;
