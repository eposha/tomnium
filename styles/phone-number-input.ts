import {createGlobalStyle} from 'styled-components';

export const PhoneFieldStyles = createGlobalStyle<{
  $isRegister?: boolean;
  $isError?: boolean;
}>`
  .phone-field-container  {
    display: flex;
    background: #f4f6fa !important;
    border-radius: ${({$isRegister}) => ($isRegister ? '10px' : '5px')};
    font-family: 'Gilroy-Regular';
    
    .phone-field-input {      
      ${({$isRegister}) => $isRegister && 'margin-left: 2px'};
      background: ${({$isRegister}) =>
        $isRegister ? '#f4f6fa' : 'transparent'};
      color: #697077;
      font-size: 12px;
      line-height: 12px;
      border-radius: ${({$isRegister}) => ($isRegister ? '11px' : '5px')};

      padding: 14px 12px;
      width: 100%;
      height: auto;
      border: 1px solid ${({$isError}) => ($isError ? '#E25241' : '#f4f6fa')};
      outline: none;
      box-shadow: none;
      cursor: pointer;
      &:focus{
        border: 1px solid #516ff6;
        box-shadow: 0px 0px 3px 0px #1e6bff;
      }
      
    }
    .phone-field-dropdown-button{
      position: static;
      order: -1;
      background: #f4f6fa;
      border: none;
      border-radius: ${({$isRegister}) => ($isRegister ? '10px' : '0px')};
      &.open {
        background: ${({$isRegister}) => ($isRegister ? '#fff' : 'unset')};
        border-radius: ${({$isRegister}) => ($isRegister ? '10px' : '0px')};
        .selected-flag{
          background: ${({$isRegister}) => ($isRegister ? '#fff' : 'unset')};
          border-radius: ${({$isRegister}) => ($isRegister ? '10px' : '0px')};
        }
      }
    }
    .phone-field-dropdown{
      margin: 10px 0 0;
      border-radius: ${({$isRegister}) => ($isRegister ? '10px' : '5px')};
      box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
      .search{
        padding: 10px;
        &-box{
          margin: 0;
          width: 100%;
          padding: 8px;
        }
      }
      .country{
        padding: 5px 10px 5px 44px;
        &:hover{
          background: rgba(0,116,217,0.1);
        }
        &.highlight{
          background: rgba(30,107,255,0.5);
          *{
            color: #fff;
          }
          &:hover{
            background: rgba(30,107,255,0.5);
          }
        }
      }
    }
    .selected-flag {
      padding: 0;
      padding-left: 8px;
      border-radius: ${({$isRegister}) => ($isRegister ? '10px' : '0px')};
      &:hover,
      &:focus{
        background-color: unset;
      } 
      
      background: ${({$isRegister}) =>
        $isRegister ? '#f4f6fa' : 'transparent'};

      .arrow, .arrow.up{
        top: unset;
        border: solid #BCBCBC;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
      }
    }
  }
`;
