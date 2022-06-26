import {FC} from 'react';
import styled, {css} from 'styled-components';
import {media} from 'styles/media';

import LockSvg from '/public/icons/LockWhite.svg';
import RoundSvg from '/public/icons/Round.svg';
import CheckedSvg from '/public/icons/Checked.svg';

const roundIconCss = css`
  ${media.greaterThan('xs')`
    width: 20px;
    height: 20px;
  `}
`;

const LockIcon = styled(LockSvg)<{$isLesson?: boolean}>`
  width: ${({$isLesson}) => ($isLesson ? '9px' : '11px')};
  height: ${({$isLesson}) => ($isLesson ? '10px' : '13px')};

  ${media.greaterThan('xs')`
    width: 18px;
    height: 20px;
  `}

  path {
    fill: ${({$isLesson}) => $isLesson && '#516FF6'};
  }
`;

const AvailableIcon = styled(RoundSvg)<{$isLesson?: boolean}>`
  width: ${({$isLesson}) => ($isLesson ? '9px' : '13px')};
  height: ${({$isLesson}) => ($isLesson ? '9px' : '13px')};

  ${roundIconCss};

  path {
    stroke: ${({$isLesson}) => ($isLesson ? '#516FF6' : '#fff')};
  }
`;

const DoneIcon = styled(CheckedSvg)<{$isLesson?: boolean}>`
  width: ${({$isLesson}) => ($isLesson ? '9px' : '13px')};
  height: ${({$isLesson}) => ($isLesson ? '9px' : '13px')};
  ${roundIconCss};

  path {
    stroke: ${({$isLesson}) => ($isLesson ? '#516FF6' : '#fff')};
  }
`;

interface CardLabelIconProps {
  isLesson?: boolean;
  isAvailable: boolean;
  progress?: number;
}

export const CardLableIcon: FC<CardLabelIconProps> = ({
  isAvailable,
  progress,
  isLesson,
}) => {
  return isAvailable ? (
    progress === 100 ? (
      <DoneIcon $isLesson={isLesson} />
    ) : (
      <AvailableIcon $isLesson={isLesson} />
    )
  ) : (
    <LockIcon $isLesson={isLesson} />
  );
};
