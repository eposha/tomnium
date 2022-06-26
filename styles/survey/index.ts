import styled, {css} from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding-top: 30px;

  ${media.greaterThan('xs')`
    padding: 40px 0 80px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;
  `};
`;

export const FieldCss = css`
  outline: none;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #d3e2ff;
  box-sizing: border-box;
  padding: 15px 10px;
  color: #131415;
  font-family: 'Gilroy-Regular', sans-serif;
`;

export const SurveysWrapper = styled.div`
  width: 100%;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
`;

export const SurveyQuiz = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const SurveyCard = styled.div``;

export const SurveyTitle = styled.div`
  font-family: 'Gilroy-Medium';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #131415;
  margin-bottom: 5px;
`;

export const SurveyDescription = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #697077;
`;
export const SurveyItem = styled.div`
  margin-top: 15px;
`;

export const StringSurvey = styled.input`
  max-width: 300px;
  width: 100%;
  height: 40px;
  ${FieldCss};
`;

export const TextSurvey = styled.textarea`
  max-width: 300px;
  width: 100%;
  height: 100px;
  resize: none;
  font-family: 'Gilroy';
  ${FieldCss};
`;

export const ItemSurveyWrapper = styled.div``;

export const StringSurveyWrapper = styled.div``;

export const CheckBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FreeAnswer = styled.input.attrs({type: 'text'})<{mt?: number}>`
  max-width: 300px;
  width: 100%;
  height: 40px;
  ${FieldCss};
  margin-top: ${({mt}) => mt || 0}px;

  &:disabled {
    border: 1px solid #bcbcbc;
  }
`;
