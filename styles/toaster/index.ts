import {ToastContainer} from 'react-toastify';

import styled from 'styled-components';

export const Toast = styled(ToastContainer)`
  z-index: 999999999999;
`;

export const NotificationText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 10px;
  text-align: start;
  font-size: 12px;
  line-height: 14px;

  color: #697077;

  &:last-child {
    margin-top: 5px;
  }
`;

export const NotificationTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-right: 8px;
`;

export const NotificationTitle = styled.div`
  text-align: start;
  font-size: 12px;
  line-height: 14px;
  color: #131415;
`;
