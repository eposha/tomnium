import {gql} from '@apollo/client';

export const AppointmentFragment = gql`
  fragment AppointmentFragment on Appointment {
    id
    startAt
    active
    url
    bookedByMe
  }
`;
