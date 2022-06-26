import styled from 'styled-components';

export const GlobalOptionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 8px 10px;
  width: 160px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  &:first-child {
    margin: 0;
  }
`;

export const Text = styled.span`
  margin-right: 13px;
  color: #fff;
  font-size: 14px;
`;

export const MediaIconsWrapper = styled.div<{sidebar?: boolean}>`
  display: flex;
  justify-content: space-between;
  margin: ${({ sidebar }) => sidebar ? '0 0 20px' : '20px 0 0'};
  gap: ${({sidebar}) => sidebar ? '30px' : 'unset'};
`;

export const MediaIconsWrapperMobile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
  padding: 5px 0 15px;
`;

export const InnerSelects = styled.div<{sidebar?: boolean}>`
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  width: ${({sidebar}) => sidebar ? '100%' : '160px'};
  ${({ sidebar }) => sidebar &&
    'display: flex; justify-content: space-between;'}
`;

export const OptionsWrapper = styled.div<{sidebar?: boolean}>`
  ${({ sidebar }) => sidebar &&
  `display: flex;
   flex-direction: column-reverse;
   align-items: center;
   margin-bottom: 10px;
    `
  }
`;
