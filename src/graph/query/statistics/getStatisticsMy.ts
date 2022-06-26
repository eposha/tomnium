import {gql} from '@apollo/client';

export interface IStatisticsMyResponse {
  statisticsMy: {
    monthsFromRegistration?: number;
    completedLessons?: number;
    giftsReceived?: number;
  };
}

export const GET_STATISTICS_MY = gql`
  query statisticsMy {
    statisticsMy {
      monthsFromRegistration
      completedLessons
      giftsReceived
    }
  }
`;
