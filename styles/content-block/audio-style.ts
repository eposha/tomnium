import styled from 'styled-components';
import {media} from 'styles/media';

export const ElementWrapper = styled.div`
  margin-top: 20px;
  padding: 10px 0 0 0;
  background-color: #fff;
  border: 1px solid #d3e2ff;
  border-radius: 5px;

  ${media.greaterThan('xs')`
    margin-top: 50px;
    padding: 35px 56px 0 56px;
  `};
`;

export const AudioPlayerWrapper = styled.div`
  display: flex;
`;

export const AudioTitle = styled.div`
  margin-left: 24px;
  font-weight: 600;
  font-size: 18px;
  color: #131415;
`;

export const AudioPlayer = styled.div`
  width: 100%;
`;
