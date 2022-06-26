import styled from 'styled-components';
import {media} from 'styles/media';

export const WrapperAppointments = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const InnerAppointment = styled.div`
  ${media.lessThan('lg')`
    padding-top: 10px;
    padding-bottom: 0`}
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
    padding-bottom: 30px;
  }
`;

export const MainBlockAppointment = styled.div`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  padding: 14px 25px 14px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto;
  border-radius: 10px;
  max-width: 160px;
  width: 100%;
`;

export const InnerImage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

export const InnerLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileAppointmentsWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.common.white};
`;
