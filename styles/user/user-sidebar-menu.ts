import styled from 'styled-components';

export const Wrapper = styled.div<{isSub?: boolean}>`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: ${({ isSub }) => isSub ? '10px' : '20px 25px'};
  width: 180px;
  background: #fff;
  border-radius: 5px;
`;
export const IconWrapper = styled.div<{isActive: boolean}>`
  margin-right: 12px;

  svg {
    path {
      stroke: ${({isActive}) => (isActive ? '#516FF6' : '#8BB3FF')};
    }
  }
`;

const LinkItemUI = styled.a<{isActive: boolean}>(({isActive, theme}) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  fontSize: '14px',
  lineHeight: '20px',
  color: isActive ? theme.colors.common.black : theme.colors.common.greyLight,
  cursor: 'pointer',
}));

export const LinkItem = styled(LinkItemUI)`
  &:hover {
    color: ${({theme}) => theme.colors.common.black};
  }

  &:hover ${IconWrapper} svg path {
    stroke: #516ff6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
