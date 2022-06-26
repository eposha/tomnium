import {gql} from '@apollo/client';

export const LearnDurationFragment = gql`
  fragment LearnDurationFragment on LearnDuration {
    years
    months
    weeks
    days
    hours
    minutes
    seconds
  }
`;
