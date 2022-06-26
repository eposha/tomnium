import DotesOptionsIcon from 'public/icons/DotesOptions.svg';
import SupportNotificationType from 'public/icons/SupportNotificationType.svg';
import PaymentNotificationType from 'public/icons/PaymentNotificationType.svg';
import NewMessageNotificationType from 'public/icons/NewMessageNotificationType.svg';
import NewModuleNotificationType from 'public/icons/NewModuleNotificationType.svg';
import NewSuggestionNotificationType from 'public/icons/NewSuggestionNotificationType.svg';
import SupportNotificationStatus from 'public/icons/SupportNotificationStatus.svg';
import SuccessSvg from 'public/icons/SuccessIcon.svg';
import RemoveSvg from 'public/icons/RemoveIcon.svg';
import SupportSvg from 'public/icons/SupportNotificationType.svg';
import {media} from 'styles/media';
import {Media} from 'src/media-styles';

import styled, {css} from 'styled-components';

const IconCss = css`
  margin-right: 7px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
`;

export const NotificationBell = styled.div<{$isNewNotification: boolean}>`
  position: relative;
  display: flex;
  align-items: center;

  ${({$isNewNotification}) =>
    $isNewNotification &&
    `&:after {
      content: '';
      position: absolute;
      top: 0;
      left: 10px;
      width: 5px;
      height: 5px;
      background-color: #E25241;
      border-radius: 50%;
    }`};
`;

export const NotificationPopup = styled.div`
  position: absolute;
  right: -102px;
  top: 32px;
  padding: 20px 0;
  width: 100vw;
  max-height: calc(100vh - 49px);
  background: #f4f6fa;

  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100000;

  cursor: default;

  ${media.greaterThan('xs')`
    top: 65px;
    right: -48px;
    width: 280px;
    max-height: calc(100vh - 150px);
    border: 1px solid #d3e2ff;
    border-radius: 5px;
`}
`;

export const NotificationSubtitleWrapper = styled.div<{padding?: string}>`
  display: flex;
  justify-content: space-between;
  padding: ${({padding}) => padding || '0 20px 15px'};
`;

export const NotificationsConfig = styled(Media)`
  position: absolute;
  top: 65px;
  right: 248px;
  padding: 20px;
  width: 280px;
  cursor: default;

  background-color: #fff;
  border: 1px solid #516ff6;
  border-radius: 5px;
`;

export const NotificationOptions = styled.div`
  position: relative;
  left: 16px;
  padding: 0 16px;
  line-height: 16px;
  cursor: pointer;
`;

export const DotesOption = styled.div<{$firstChild?: boolean}>`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 17px;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;

  color: #697077;

  ${({$firstChild}) =>
    $firstChild &&
    ` padding-top: 17px;
      border-top: 1px solid #d3e2ff;
    `};
`;

export const DotesOptions = styled(DotesOptionsIcon)`
  height: 3px;
  width: 11px;
  min-height: 3px;
  min-width: 11px;
`;

export const NotificationSubtitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #131415;
`;

export const EmptyNotificationItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  font-size: 12px;
  outline: 0;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    height: 1px;
    width: calc(100% - 40px);
    background: #d3e2ff;
  }
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

export const AllNotifications = styled.div`
  position: relative;
  padding-top: 15px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #516ff6;
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

export const SupportNotificationTypeIcon = styled(SupportNotificationType)`
  ${IconCss}
`;

export const PaymentNotificationTypeIcon = styled(PaymentNotificationType)`
  ${IconCss}
`;
export const NewMessageNotificationTypeIcon = styled(
  NewMessageNotificationType,
)`
  ${IconCss}
`;
export const NewModuleNotificationTypeIcon = styled(NewModuleNotificationType)`
  ${IconCss}
`;
export const NewSuggestionNotificationTypeIcon = styled(
  NewSuggestionNotificationType,
)`
  ${IconCss}
`;
export const SupportNotificationStatusIcon = styled(SupportNotificationStatus)`
  ${IconCss}
`;

export const SuccessSvgIcon = styled(SuccessSvg)`
  ${IconCss}
`;
export const RemoveSvgIcon = styled(RemoveSvg)`
  ${IconCss}
`;
export const SupportSvgIcon = styled(SupportSvg)`
  ${IconCss}
`;
