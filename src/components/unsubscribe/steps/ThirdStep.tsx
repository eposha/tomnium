import {FC} from 'react';
import {
  StepWrapper,
  ReasonsWrapper,
  ReasonItemInner,
  StepInner,
  TxtLink,
  ReasonsBlockTitle,
} from 'styles/unsubscribe/common';
import ButtonsCrontroller from '../buttons/ButtonsCrontroller';
import CustomRoundCheckbox from '../form-elements/CustomRoundCheckbox';
import {TextArea} from 'styles/unsubscribe/form-elements';
import Link from 'next/link';
import {Media} from 'src/media-styles';
const ReasonsData = [
  'Я недостаточно использую этот продукт',
  'Подписка нужна была для однократного использования',
  'Хочу сделать паузу в своем развитии',
  'Стоимость слишком высокая для меня',
  'Личные причины, я еще вернусь',
  'Курсы не были полезными',
];

interface ThirdStepPropsType {
  nextStepFunc: any;
}

const ThirdStep: FC<ThirdStepPropsType> = ({nextStepFunc}) => {
  return (
    <StepWrapper isPad>
      <Media greaterThan='xs'>
        <ReasonsBlockTitle>
          Пожалуйста, укажите основную причину отмены подписки:
        </ReasonsBlockTitle>
      </Media>
      <StepInner>
        <ReasonsWrapper>
          {ReasonsData.map((elem) => {
            return (
              <ReasonItemInner key={elem}>
                <CustomRoundCheckbox text={elem} />
              </ReasonItemInner>
            );
          })}

          <ReasonItemInner isLast>
            <CustomRoundCheckbox text={'Курсы не были полезными'} isWrap>
              <TextArea placeholder='Пожалуйста, опишите...' />
            </CustomRoundCheckbox>
          </ReasonItemInner>

          <ReasonItemInner isLast>
            <CustomRoundCheckbox text={'Другое'} isWrap>
              <TextArea placeholder='Пожалуйста, опишите...' />
            </CustomRoundCheckbox>
          </ReasonItemInner>
        </ReasonsWrapper>
        <ButtonsCrontroller
          nextStepFunc={nextStepFunc}
          confirmText='Cохранить доступы'>
          <Media greaterThan='xs'>
            <Link href={'#'} passHref>
              <TxtLink>Связаться с поддержкой</TxtLink>
            </Link>
          </Media>
        </ButtonsCrontroller>
      </StepInner>
      <Media at='xs'>
        <Link href={'#'} passHref>
          <TxtLink>Связаться с поддержкой</TxtLink>
        </Link>
      </Media>
    </StepWrapper>
  );
};

export default ThirdStep;
