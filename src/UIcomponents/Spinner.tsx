import {FC} from 'react';
import styled, {keyframes} from 'styled-components';

const Loading = styled.div<{$primary?: boolean}>`
  position: relative;
  width: 24px;
  height: 24px;
  transform-style: preserve-3d;
  perspective: 800px;
  ${({$primary}) => $primary && 'margin: auto'};
`;

const rotate1 = keyframes`
    from {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
    }
    to {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn);
    }
`;

const rotate2 = keyframes`
    from {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
    }

    to {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn);
    }
`;

const rotate3 = keyframes`
    from {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
    }

    to {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn);
    }
`;

const Act = styled.div<{$primary?: boolean}>`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-bottom: 2px solid
    ${({theme, $primary}) => ($primary ? theme.colors.primary : '#fff')};

  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation: rotate#{$i} 1.15s linear infinite;
    }
  }

  &:nth-child(1) {
    animation: ${rotate1} 1.15s linear infinite;
    animation-delay: -0.8s;
  }

  &:nth-child(2) {
    animation: ${rotate2} 1.15s linear infinite;
    animation-delay: -0.4s;
  }

  &:nth-child(3) {
    animation: ${rotate3} 1.15s linear infinite;
    animation-delay: 0s;
  }
`;

interface ISpinner {
  primary?: boolean;
}

const Spinner: FC<ISpinner> = ({primary}) => (
  <Loading $primary>
    <Act $primary={primary} />
    <Act $primary={primary} />
    <Act $primary={primary} />
  </Loading>
);

export default Spinner;
