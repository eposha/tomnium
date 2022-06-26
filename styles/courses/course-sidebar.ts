import styled from 'styled-components';
import {Text} from 'styles/common';

export const CourseEndDateWrapper = styled.div`
  border: ${({theme}) => `1px solid ${theme.colors.common.blueberryLight}`};
  box-shadow: 0px 0px 4px rgba(244, 246, 250, 0.12),
    0px 0px 0px rgba(244, 246, 250, 0.12);
  border-radius: 10px;
  padding: 20px 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseEndDate = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0 0 16px;
`;

export const CourseEndDateLink = styled.a`
  text-decoration: underline;
  font-weight: 500;
  font-size: 12px;
`;

export const SidebarButtons = styled.div`
  display: flex;
  justify-content: center;

  & > :first-child {
    margin-right: 10px;
    width: 40px;
    flex: none;
  }
`;

export const SupportBtn = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #D3E2FF;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #516FF6;
  font-family: 'Gilroy-Medium';
`