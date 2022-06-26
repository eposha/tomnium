import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: -65px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 999999;
`;

export const ModalContainer = styled.div`
  min-width: 310px;
  max-width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
  padding: 20px 10px;
  color: ${({theme}) => theme.colors.common.black};
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.1);
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const ModalTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({theme}) => theme.colors.common.black};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ModalButton = styled.button<{background: string; color: string}>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  min-width: 135px;
  max-width: 140px;
  width: 100%;
  color: ${({theme, color}) => theme.colors.common[color]};
  background-color: ${({theme, background}) => theme.colors.common[background]};
  border: 1px solid ${({theme}) => theme.colors.common.blueberry};
  border-radius: 5px;
  padding: 10px;
`;
