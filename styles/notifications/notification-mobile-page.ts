import NewSuggestionNotificationType from 'public/icons/NewSuggestionNotificationType.svg';

import styled, {css} from 'styled-components';

const IconCss = css`
  margin-right: 7px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
`;

export const NotificationPopup = styled.div`
  width: 100%;
  background: #f4f6fa;
`;
export const NotificationSubtitleWrapper = styled.div<{padding?: string}>`
  display: flex;
  justify-content: space-between;
  padding: ${({padding}) => padding || '0 20px 15px'};
`;

export const NotificationSubtitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #131415;
`;

export const NotificationItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  outline: 0;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    height: 1px;
    width: calc(100% - 40px);
    background: #d3e2ff;
  }

  &:hover {
    background-color: #d3e2ff;
  }
`;

export const NotificationItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-right: 8px;
`;

export const NewSuggestionNotificationTypeIcon = styled(
  NewSuggestionNotificationType,
)`
  ${IconCss}
`;

export const NotificationTitle = styled.div`
  text-align: start;
  font-size: 12px;
  line-height: 14px;
  color: #131415;
`;

export const NotificationTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const NotificationTime = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: #bcbcbc;
`;

export const NotificationTimePoint = styled.div`
  margin-left: 5px;
  width: 5px;
  height: 5px;
  min-width: 5px;
  min-height: 5px;
  border-radius: 50%;
  background-color: #516ff6; ;
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

export const AddMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const AllNotifications = styled.div`
  color: rgb(81, 111, 246);
  font-size: 12px;
`;
