import {Media} from 'src/media-styles';
import Sidebar from '@/components/common/Sidebar/Sidebar';
import dynamic from 'next/dynamic';

import {useState} from 'react';
import FirstStep from '@/components/unsubscribe/steps/FirstStep';

import * as Main from 'styles/user/common';
import * as UI from 'styles/unsubscribe/index';

const SecondStep = dynamic(
  () => import('@/components/unsubscribe/steps/SecondStep'),
);

const FourthStep = dynamic(
  () => import('@/components/unsubscribe/steps/FourthStep'),
);

const UnsubscribePage = () => {
  const [pageStep, setPageStep] = useState(0);

  const nextPageStep = (page: any = null) => {
    setPageStep((currentStep) => (page || page === 0 ? page : currentStep + 1));
  };

  return (
    <UI.PageWrapper>
      <Media greaterThan='xs'>
        <Sidebar />
      </Media>
      <UI.PageInner>
        <Main.BlockSubTitle>Отмена подписки</Main.BlockSubTitle>
        <UI.Box>
          {pageStep == 0 && <FirstStep nextStepFunc={() => nextPageStep()} />}
          {pageStep == 1 && <SecondStep nextStepFunc={() => nextPageStep()} />}
          {pageStep == 2 && <FourthStep />}
        </UI.Box>
      </UI.PageInner>
    </UI.PageWrapper>
  );
};

export default UnsubscribePage;
