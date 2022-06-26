import {media, BREAKPOINT_CONTAINER} from 'styles/media';

import styled from 'styled-components';

export const PolicyWrapper = styled.div<{ mobile?: boolean | any, sidebar?: boolean }>(({mobile, sidebar}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: `${BREAKPOINT_CONTAINER}px`,
  lineHeight: mobile ? 'unset' : '50px',
  background:  sidebar ? 'transparent' : '#1d1d1f',
  position: 'relative',
  flexWrap: mobile ? 'wrap' : 'unset',
  gap: mobile ? '10px' : 'unset',
}))


export const CreatedAppData = styled.div<{sidebar?: boolean}>`
  color: ${({sidebar}) => sidebar ? '#8BB3FF' : '#fff'};
  font-size: 10px;
  display: flex;
  justify-content: end;
  flex: 1;
  min-width: 80px;

  ${media.greaterThan('sm')`
    flex: unset;
    min-width: auto;
  `}
`;

export const PolicyLink = styled.a<{sidebar?: boolean}>`
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
  text-decoration-line: underline;
  color: ${({sidebar}) => sidebar ? '#BCBCBC' : 'rgba(255, 255, 255, 0.5)'};
`;

export const Empty = styled.div`
  width: 172px;
`;

export const AllRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: #697077;
`;
