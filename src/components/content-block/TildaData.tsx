import {useGetTildaData} from '@/graph-hooks/tilda/useGetTildaData';
import TildaContentBlock from '@/components/tilda/TildaContentBlock';
import {SpinnerLoader} from '@/components/common/Loader/Loaders';

import {useNode} from '@craftjs/core';

import styled, {css} from 'styled-components';

const TildaContentBlockWrapper = styled.div`
  margin: 25px 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 0;
  background-color: transparent;
  ${SpinnerStyles};
`;

const TildaData = () => {
  const {tildaId} = useNode((node) => ({
    tildaId: node.data.props.tildaId,
  }));

  const {tildaData, loading} = useGetTildaData({tildaId});

  const {html} = tildaData || {};
  const tildaCss = tildaData?.TildaProject?.css;
  const tildaJs = tildaData?.TildaProject?.js;

  return loading ? (
    <LoaderItemWrapper>
      <SpinnerLoader />
    </LoaderItemWrapper>
  ) : html && tildaCss && tildaJs ? (
    <TildaContentBlockWrapper>
      <TildaContentBlock html={html} tildaCss={tildaCss} js={tildaJs} />
    </TildaContentBlockWrapper>
  ) : null;
};

export default TildaData;
