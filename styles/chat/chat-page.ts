import {media} from 'styles/media';

import styled, {css} from 'styled-components';

const lineClampStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;

  ${media.greaterThan('sm')`
    margin: 30px 0;
`};
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.greaterThan('sm')`
    max-width: 800px;
    margin-left: 20px;
`};
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;

  ${media.greaterThan('sm')`
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 24px;
`};
`;

export const ChatCard = styled.a`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px 10px;
  width: 100%;
  background: #fff;
  border-radius: 5px;

  ${media.greaterThan('sm')`
    margin-bottom: 15px;
    padding: 10px;
`};
`;

export const ChatRoomData = styled.div`
  margin-right: 10px;
`;

export const ChatData = styled.div``;

export const ChatInfoMob = styled.div`
  margin-bottom: 5px;
  font-size: 10px;
  line-height: 12px;
  color: #697077;

  ${lineClampStyle}
  -webkit-line-clamp: 1;
`;

export const LastMessageMob = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #131415;

  ${lineClampStyle}
  -webkit-line-clamp: 1;
`;

export const AvatarWrapper = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

export const ChatDataWrapperDesktop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ChatInfoDesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChatInfoDesktop = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleThread = styled.div`
  margin-right: 3px;
  font-size: 10px;
  color: #697077;
`;

export const LinkToThread = styled.div`
  color: #8bb3ff;
  font-size: 10px;
  ${lineClampStyle}
  -webkit-line-clamp: 1;
`;

export const LastMessageDesktop = styled.div`
  display: flex;
  align-items: center;
  line-height: 17px;
`;

export const LinkToAuthor = styled.div`
  margin-right: 3px;
  font-weight: 600;
  font-size: 14px;
  color: #516ff6;
`;

export const LastMessageText = styled.div`
  font-weight: 600;
  font-size: 14px;

  ${lineClampStyle}
  -webkit-line-clamp: 1;
`;

export const UnreadMessagesCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 10px;
  min-height: 10px;
  font-size: 10px;
  color: #516ff6;
  background: #516ff6;
  border-radius: 50%;
`;
