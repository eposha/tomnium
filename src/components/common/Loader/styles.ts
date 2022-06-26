import styled, {css} from 'styled-components';

export const LoaderContainer = styled.div<{
  zIndex?: number;
  $isVisible?: boolean;
}>`
  z-index: ${({zIndex}) => (zIndex ? zIndex : 99999)};
  opacity: 1;
  visibility: visible;
  transition: 0.5s all;
  ${(props) => !props.$isVisible && ` opacity:0; visibility:hidden;`}
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SpinnerStyles = css`
  & .lds-spinner {
    color: #333;
    display: inline-block;
    position: relative;
    width: 75px;
    height: 40px;
  }
  & .lds-spinner div {
    transform-origin: 40px 25px;
    animation: lds-spinner 1.2s linear infinite;
  }
  & .lds-spinner div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 38px;
    width: 3px;
    height: 13px;
    border-radius: 20%;
    background: #333;
  }
  & .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const LoaderItemWrapper = styled.div`
  position: fixed;
  z-index: 10000;
  padding: 45px 30px;
  background-color: transparent;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${SpinnerStyles};
`;
