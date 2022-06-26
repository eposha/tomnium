import styled from 'styled-components';
import {media} from '../media';
import Locked from '@/public/icons/LockSVG.svg';

export const HomeworkLockedContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  padding: 25px 22px 25px 53px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  position: relative;

  ${media.greaterThan('md')`
    font-size: 16px;
    padding: 30px 22px 35px 75px;
  `}
`;

export const LockedIcon = styled(Locked)`
  position: absolute;
  width: 20px;
  height: 23px;
  left: 23px;
  top: 50%;
  transform: translateY(-50%);

  ${media.greaterThan('md')`
    width: 30px;
    height: 35px;
  `}
`;
