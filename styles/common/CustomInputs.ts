import styled from 'styled-components';
import { media } from 'styles/media';

export const InputRange = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  max-width: 380px;
  width: 100%;

  &::-webkit-slider-thumb {
   -webkit-appearance: none;
   border-radius: 50%;
   width: 20px;
   height: 20px;
   background: #516FF6;
   margin-top: -7px;
   display: flex;
   justify-content: center;

   &::before {
     content: '3';
   }
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    border: none;
    height: 5px;
    border-radius: 3px;
    background: #516FF6;
  }

  &::-webkit-scrollbar-track{}
`