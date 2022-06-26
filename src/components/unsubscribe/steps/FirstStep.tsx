import * as UI from 'styles/unsubscribe/index';
import {FC} from 'react';
import ButtonsCrontroller from '../buttons/ButtonsCrontroller';
import SupportBlock from '../support-block/SupportBlock';

interface FirstStepPropsType {
  nextStepFunc: () => void;
}

const FirstStep: FC<FirstStepPropsType> = ({nextStepFunc}) => {
  return (
    <>
      <SupportBlock />
      <UI.ConfirmWrapper>
        <UI.SubTitle>Вы уверены?</UI.SubTitle>
        <UI.AccordionTxt>
          Вы точно хотите утратить свой доступ к подписке?
        </UI.AccordionTxt>
        <ButtonsCrontroller nextStepFunc={nextStepFunc} />
      </UI.ConfirmWrapper>
    </>
  );
};

export default FirstStep;
