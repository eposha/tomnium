import styled from 'styled-components';

interface ISize {
  size: 'large' | 'small';
}

export const InnerItemBlock = styled.div<ISize>`
  display: flex;
  flex-direction: column;
  justify-content: ${({size}) =>
    size === 'large' ? 'space-between' : 'flex-start'};
  padding: 0;
  box-sizing: border-box;
  height: 100%;
`;

export const InnerItem = styled.div<ISize>`
  display: flex;
  gap: 10px;
  padding: 21px 0;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid
    ${({theme, size}) =>
      size === 'large'
        ? theme.colors.common.whiteGrey
        : theme.colors.common.blueberryLight};
`;

export const InnerImage = styled.div<{size: 'large' | 'small'}>`
  position: relative;
  width: ${({size}) => (size === 'large' ? '130px' : '100px')};
  height: ${({size}) => (size === 'large' ? '74px' : '60px')};
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
`;

export const ChangingQualityButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.common.jordyBlue};
  font-weight: 600;
  font-size: 16px;
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.common.jordyBlue};
  border-radius: 5px;
  flex-shrink: 0;
`;

export const InnerQualityButtons = styled.div`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContent = styled.div`
  flex-grow: 1;
`;

export const InnerQuality = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.common.black};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  flex-shrink: 0;
`;

export const InnerPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.colors.common.whiteGrey};
  box-sizing: border-box;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
    padding: 10px 0 0 0;
  }
`;
