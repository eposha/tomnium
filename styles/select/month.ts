import styled from 'styled-components';
import Select from '@/components/common/Select';

export const MonthSelect = styled(Select)`
  && {
    .react-select__control {
      background-color: transparent;
      border: none;
      justify-content: flex-start;
      &:hover {
        border: none;
        box-shadow: none;
      }
    }
    .react-select__single-value {
      color: ${({theme}) => theme.colors.common.greyDark};
    }
    .react-select__option {
      font-weight: 400;
      text-align: left;
      padding: 10px;
    }

    .react-select__indicator {
      visibility: hidden;
    }
  }
`;
