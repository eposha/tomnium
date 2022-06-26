import styled from 'styled-components';

export const TransactionDatePicker = styled.div`
  input {
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    color: ${({theme}) => theme.colors.common.blueberry};
    padding: 8px 12px;
    border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
    border-radius: 5px;
    width: 100px;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${({theme}) => theme.colors.common.blueberryLight};
    }
  }

  .react-datepicker {
    border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
    border-radius: 5px;
    left: -20px;
  }

  .react-datepicker__day:hover {
    background-color: ${({theme}) => theme.colors.common.blueberryLight};
  }
`;
