import * as UI from 'styles/unsubscribe/index';
import SupportBlock from '../support-block/SupportBlock';

const FourhStep = () => {
  return (
    <>
      <UI.BlockWrapper>
        <UI.SubTitle>Ваша подписка отменена</UI.SubTitle>
        <UI.AccordionTxt mw={390}>
          У вас по прежнему остается доступ к контенту до конца текущего
          платежного периода. После его окончания вы утратите доступы к вашим
          материалам и результатам, но восстановите их, когда снова
          воспользуетесь подпиской. Будем счастливы вашему возращению!
        </UI.AccordionTxt>
      </UI.BlockWrapper>
      <SupportBlock />
    </>
  );
};

export default FourhStep;
