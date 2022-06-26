import React from 'react';
import {
  StepsWrapper,
  StepWrapper,
  InnerCount,
  HeadArrow,
  ContainerStep,
} from './styles';
import {StepProps} from './types';
import {Text} from 'styles/common';

type TProps = {
  dataSteps?: {code: string[]; title: string}[];
  activeStepCode: string;
};

const Step: React.FC<StepProps & {index: number}> = ({
  children,
  $isActive,
  $isDone,
  index,
}) => {
  return (
    <ContainerStep>
      <StepWrapper>
        <InnerCount $isActive={$isActive} $isDone={$isDone}>
          {index}
        </InnerCount>
        <Text
          as={'span'}
          fontSize={'12px'}
          lineHeight={'14px'}
          fontWeight={$isActive ? '600' : '500'}
          color={$isActive ? 'black' : 'greyDark'}>
          {children}
        </Text>
      </StepWrapper>
      <HeadArrow />
    </ContainerStep>
  );
};

export const PrimaryBreadcrumbs: React.FC<TProps> = ({
  dataSteps = [],
  activeStepCode,
}) => {
  const idx = dataSteps?.findIndex((it) => it.code.includes(activeStepCode));
  return (
    <StepsWrapper>
      {dataSteps?.map((step, indexStep) => (
        <Step
          key={step.title}
          index={indexStep + 1}
          $isDone={idx > indexStep}
          $isActive={idx === indexStep}>
          {step.title}
        </Step>
      ))}
    </StepsWrapper>
  );
};
