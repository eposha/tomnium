import styled from 'styled-components';

import CloseIconSVG from '@/public/icons/CloseIconSVG.svg';

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #d3e2ff;
`;

export const CloseIcon = styled(CloseIconSVG)`
  width: 12px;
  height: 12px;
  path {
    stroke: #8bb3ff;
  }
`;
