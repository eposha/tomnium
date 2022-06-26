import {ProfileCard as UIProfileCard} from '@/components/common/profile';
import styled from 'styled-components';

export const Wrapper = styled.aside`
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.05);
  border-radius: 5px;

  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ProfileCard = styled(UIProfileCard)`
  margin-bottom: 20px;
`;
