import CheckTrueSVG from 'public/icons/CheckTrueSVG.svg';
import CheckFalseSVG from 'public/icons/CheckFalseSVG.svg';
import styled from 'styled-components';
import {media} from 'styles/media';
import {ArrowIconSVG} from './homework-card';

export const AnswerContainerTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
  font-size: 20px;
  `}
`;

export const AnswerContainerSubtitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 25px 0;

  ${media.greaterThan('md')`
  font-size: 16px;
  margin: 0 0 30px 0;
  `}
`;

export const QuestionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0;
  padding-left: 20px;
  position: relative;
`;

export const SVGContainer = styled.div`
  display: flex;
`;

export const CorrectAnswerSVG = styled(CheckTrueSVG)`
  width: 15px;
  height: 15px;
  left: 0;
`;

export const IncorrectAnswerSVG = styled(CheckFalseSVG)`
  width: 15px;
  height: 15px;
  left: 0;
`;

export const TaskLabelContainer = styled.div`
  order: -1;
  margin-right: 5px;

  ${media.greaterThan('xs')`
    order: 1;
    margin: 0 0 0 10px;
  `}
`;

export const TaskLabel = styled.span<{background: string}>`
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  padding: 5px 10px;
  color: ${({theme}) => theme.colors.common.white};
  border-radius: 20px;
  background: ${({theme, background}) =>
    background && theme.colors.common[background]};
`;

export const OptionWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const OptionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const OptionTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0;
`;

export const AnswerTextContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.common.whiteGrey};
`;

export const AnswerText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;
`;

export const NextLessonContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background: ${({theme}) => theme.colors.common.whiteGrey};
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.common.jordyBlue};
  margin-bottom: 20px;
`;

export const NextLessonTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
  font-size: 16px;
  `}
`;

export const NextLessonLink = styled.a`
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  right: 10px;
  top: 10px;
  background: ${({theme}) => theme.colors.common.blueberryLight};

  ${media.greaterThan('md')`
  width: 30px;
  height: 30px;
  background: ${({theme}) => theme.colors.common.white};
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  `}
`;

export const ArrowNextSVG = styled(ArrowIconSVG)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ResultContainer = styled.div`
  position: relative;
  padding: 10px;
  background: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;

  ${media.greaterThan('md')`
  padding: 20px 20px 20px 80px;
  `}

  &::before {
    ${media.greaterThan('md')`
    position: absolute;
    content: 'Результат:';
    font-size: 12px;
    font-weight: 700;
    left: 10px;
    color: ${({theme}) => theme.colors.common.blueberry};
  `}
  }
`;

export const ResultTitle = styled.h4`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0 0 10px 0;
`;

export const ResultText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 20px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;
