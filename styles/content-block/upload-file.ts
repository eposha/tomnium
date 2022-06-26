import styled from 'styled-components';
import { media } from 'styles/media';
import {Media} from 'src/media-styles';
import UploadFileIcon from 'public/icons/UploadFileSVG.svg';

export const UploadFile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px 10px;
  border: 1px solid #d3e2ff;
  border-radius: 5px;
  width: 100%;
  min-width: 100%;
  background: #ffffff;

  ${media.greaterThan('xs')`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 50px;
  padding: 30px 20px;
  border: none;
`};
`;

export const TextWrapper = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const UploadFileIconUI = styled(UploadFileIcon)`
  margin-right: 15px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;

  ${media.greaterThan('xs')`
    font-size: 18px;
    margin-bottom: 10px;
`};
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 600;

  ${media.greaterThan('xs')`    
    text-align: left;
    color: ${({theme}) => theme.colors.common.greyDark};
`};
`;

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  height: 40px;
  width: 160px;
  min-height: 40px;
  min-width: 160px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};

  ${media.greaterThan('xs')`    
    margin-top: 0;
    margin-left: 30px;
`};
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;

export const MediaWrapper = styled(Media)`
  flex: 1;
`