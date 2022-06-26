import styled, {StyledProps} from 'styled-components';
import {StepProps} from '@/components/common/Breadcrumbs/Primary/types';

export const StepsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 113px;
  padding: 12px 30px;
  background: ${({theme}) => theme.colors.common.blueberryLight};
`;

const getBackground = ({$isDone, $isActive, theme}: StyledProps<StepProps>) => {
  if ($isDone) {
    return theme.colors.common.white;
  }
  if ($isActive) {
    return theme.colors.primary;
  }
  return 'transparent';
};

export const InnerCount = styled.span<StepProps>`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme, $isActive}) =>
    $isActive ? theme.colors.common.white : theme.colors.common.jordyBlue};
  background: ${getBackground};
  border: ${({$isDone, $isActive, theme}) =>
    !$isDone && !$isActive
      ? `1px solid ${theme.colors.common.jordyBlue}`
      : 'none'};
  margin-right: 10px;
  font-size: 10px;
  line-height: 120%;
  border-radius: 50%;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const ContainerStep = styled.div`
  display: flex;
  position: relative;
  &:last-child {
    .progress-arrow {
      display: none;
    }
  }
`;

export const HeadArrow = styled.div.attrs({className: 'progress-arrow'})`
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  width: 56%;
  height: 1px;
  background: ${({theme}) => theme.colors.common.white};
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    border: ${({theme}) => `solid ${theme.colors.common.white}`};
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: rotate(-45deg);
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &:not(:last-child) {
    padding-right: 30px;
  }
`;
