import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle<{activeBg: string}>`
  .rc-pagination {
    margin: 0;    
    margin-left: auto;
    padding: 0;
    font-size: 14px;
    font-weight: 700;

  
    &::after {
      display: none;      
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      content: ' ';
    }
  
    &-total-text {
      display: inline-block;
      height: 28px;
      margin-right: 8px;
      line-height: 28px - 2px;
      vertical-align: middle;
    }
  
    &-item {
      display: inline-block;
      min-width: 30px;
      height: 30px;      
      margin-right: 3px;    
      text-align: center;
      vertical-align: middle;
      list-style: none;
      outline: 0;
      cursor: pointer;
      user-select: none;
      font-size: 14px;
      line-height: 16px;
      color: #131415;
  
      a {
        display: block;
        padding: 0 6px;
        color: rgba(0, 0, 0, 0.85);
        line-height: 30px;
        transition: none;
  
        &:hover {
          text-decoration: none;
        }
      }
  
      &:focus,
      &:hover {
        // border-color: #1890ff;
        transition: all 0.3s;
        background-color: ${({activeBg}) => activeBg};        
        border-radius: 100%;        
        
        a {
          // color: #1890ff;
        }
      }
  
      &-active {
        border-radius: 100%;        
        background-color: ${({activeBg}) => activeBg};        
  
        a {
          // color: #1890ff;
        }
  
        &:focus,
        &:hover {
          border-color: #40a9ff;
        }
  
        &:focus a,
        &:hover a {
          // color: #40a9ff;
        }
      }
    }
  
    &-jump-prev,
    &-jump-next {
      outline: 0;
  
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: #666;
      }
  
      button:after {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        content: '•••';
      }
    }
  
    &-prev,
    &-jump-prev,
    &-jump-next {
      margin-right: 8px;
    }
    &-prev,
    &-next,
    &-jump-prev,
    &-jump-next {
      display: inline-block;
      min-width: 28px;
      height: 28px;
      color: rgba(0, 0, 0, 0.85);      
      line-height: 28px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s;
    }
  
    &-prev,
    &-next {
      outline: 0;
  
      button {
        color: rgba(0, 0, 0, 0.85);
        cursor: pointer;
        user-select: none;
      }
  
      &:hover button {
        border-color: #40a9ff;
      }
  
      .rc-pagination-item-link {
        display: none;
        width: 100%;
        height: 100%;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        outline: none;
        transition: all 0.3s;
      }
  
      &:focus .rc-pagination-item-link,
      &:hover .rc-pagination-item-link {
        color: #131415;
        // border-color: #1890ff;
      }
    }
  
    &-prev button:after {
      content: '';
      display: none;
    }
  
    &-next button:after {
      content: '';
      display: none;
    }
  
    &-disabled {      
      &,
      &:hover,
      &:focus {
        display: none;
        cursor: not-allowed;
        .rc-pagination-item-link {
          color: fade(#000, 25%);
          border-color: #d9d9d9;
          cursor: not-allowed;
        }
      }
    }
  
    &-slash {
      margin: 0 10px 0 5px;
    }
  
    &-options {
      display: none;
      margin-left: 16px;
      vertical-align: middle;

  
      &-size-changer.rc-select {
        display: inline-block;
        width: auto;
        margin-right: 8px;
      }
  
      &-quick-jumper {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        vertical-align: top;
  
        input {
          width: 50px;
          margin: 0 8px;
        }
      }
    }
  
    &-simple &-prev,
    &-simple &-next {
      height: 24px;
      line-height: 24px;
      vertical-align: top;
      .rc-pagination-item-link {
        height: 24px;
        background-color: transparent;
        border: 0;
        &::after {
          height: 24px;
          line-height: 24px;
        }
      }
    }
  
    &-simple &-simple-pager {
      display: inline-block;
      height: 24px;
      margin-right: 8px;
  
      input {
        box-sizing: border-box;
        height: 100%;
        margin-right: 8px;
        padding: 0 6px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        outline: none;
        transition: border-color 0.3s;
  
        &:hover {
          // border-color: #1890ff;
        }
      }
    }
  
    // ============================ Disabled ============================
    &&-disabled {
      display: none;
      cursor: not-allowed;
  
      .rc-pagination-item {
        background: hsv(0, 0, 96%);
        border-color: #d9d9d9;
        cursor: not-allowed;
  
        a {
          color: fade(#000, 25%);
          background: transparent;
          border: none;
          cursor: not-allowed;
        }
  
        &-active {
          background: darken(hsv(0, 0, 96%), 10%);
          border-color: transparent;
          a {
            color: #fff;
          }
        }
      }
  
      .rc-pagination-item-link {
        color: fade(#000, 25%);
        background: hsv(0, 0, 96%);
        border-color: #d9d9d9;
        cursor: not-allowed;
      }
  
      .rc-pagination-item-link-icon {
        opacity: 0;
      }
  
      .rc-pagination-item-ellipsis {
        opacity: 1;
      }
    }

    
    .rc-pagination-jump-next-custom-icon, .rc-pagination-jump-prev-custom-icon {
      width: 12px;
      min-width: 12px;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
  }

`;

export default GlobalStyle;
