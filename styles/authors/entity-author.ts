import styled from 'styled-components';

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorAvatar = styled.div`
  margin-right: 10px;
`;

export const AuthorBio = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
`;

export const AuthorName = styled.h3<{color?: 'light' | 'dark'}>`
  width: 100%;
  margin: 0 0 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${({color, theme}) =>
    color === 'light' ? '#fff' : theme.colors.common.black};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AuthorRegalia = styled.span<{color?: 'light' | 'dark'}>`
  width: 100%;
  white-space: wrap;
  overflow-wrap: break-word;
  font-size: 10px;
  font-weight: 500;
  color: ${({color, theme}) =>
    color === 'light'
      ? 'rgba(255, 255, 255, 0.5)'
      : theme.colors.common.greyDark};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
`;
