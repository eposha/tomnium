import styled from 'styled-components';
import {media} from 'styles/media';

export const ButtonWrapper = styled.div<{position: string}>`
  display: flex;
  margin-top: 15px;
  justify-content: ${
      //@ts-ignore
      ({position}) => position
    };
  ${media.greaterThan('xs')`
    margin-top: 25px;
`};
`;

export const ButtonWrapperDescription = styled.div<{position: string}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px 10px;
  border: 1px solid #d3e2ff;
  border-radius: 5px;

  ${media.greaterThan('xs')`
  justify-content: space-between;
  flex-direction: ${
    //@ts-ignore
    ({position}) => position
  };
  margin-top: 50px;
  padding: 20px 0;
  border: none;
`};
`;

export const Description = styled.div`
  margin-bottom: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;

  ${media.greaterThan('xs')`
    margin-bottom: 0;
    text-align: left;
    color: ${({theme}) => theme.colors.common.greyDark};
`};
`;

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 160px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;
