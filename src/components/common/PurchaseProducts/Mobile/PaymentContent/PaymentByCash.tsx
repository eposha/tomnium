import {
  Divider,
  MobileDownloadLink,
  MobileInnerBankDetails,
} from 'styles/payments';
import {Text, Box, RightArrow} from 'styles/common';
import {ShowMoreBlock} from '@/components/common/PurchaseProducts/Mobile/ShowMoreBlock';
import {ButtonWithArrow} from '@/components/common/PurchaseProducts/Mobile/ButtonWithArrow';
import {PAYMENT_STEPS} from '@/components/common/PurchaseProducts';
import {NavLink} from '@/components/common/Navlink';

interface IProps {
  bankDetails?: {
    mfo?: string;
    companyCode?: string;
    accountNumber?: string;
  };
  openBankDetailsPopup: () => void;
  changeStep: (titleStep: string) => void;
}

const StyledText: React.FC<{align: 'right' | 'left'}> = ({children, align}) => {
  return (
    <Text
      $description
      fontSize={'12px'}
      fontWeight={'500'}
      color={'greyDark'}
      textAlign={align}>
      {children}
    </Text>
  );
};

export const MobilePaymentByCash: React.FC<IProps> = ({
  bankDetails,
  openBankDetailsPopup,
  changeStep,
}) => {
  const handleChangeStep = () => {
    changeStep(PAYMENT_STEPS.choosePaymentSystem);
  };

  return (
    <ShowMoreBlock
      title={'Оплатить через кассу или терминал'}
      render={(isShowMore) => {
        if (!isShowMore) {
          return (
            <div>
              <Box mt={'10px'} mb={'10px'}>
                <ButtonWithArrow
                  text={'Отправить реквизиты на E-mail'}
                  handler={openBankDetailsPopup}
                />
              </Box>
              <NavLink path={'/'} $fullWidth fontWeight={500}>
                Вернуться на главную страницу
              </NavLink>
            </div>
          );
        }

        return (
          <div>
            <Box mt={'10px'} mb={'20px'}>
              <MobileInnerBankDetails>
                <StyledText align={'left'}>Номер счета:</StyledText>
                <StyledText align={'right'}>
                  {bankDetails?.accountNumber}
                </StyledText>
                <StyledText align={'left'}>МФО:</StyledText>
                <StyledText align={'right'}>{bankDetails?.mfo}</StyledText>
                <StyledText align={'left'}>ОКПО:</StyledText>
                <StyledText align={'right'}>
                  {bankDetails?.companyCode}
                </StyledText>
              </MobileInnerBankDetails>
            </Box>
            <ButtonWithArrow
              border={'none'}
              text={'Отправить реквизиты на E-mail'}
              handler={openBankDetailsPopup}
            />
            <Divider />
            <MobileDownloadLink
              href='/vercel.svg'
              download={'payment_details.pdf'}>
              <Text
                $description
                fontSize={'12px'}
                color={'jordyBlue'}
                fontWeight={'500'}>
                Скачать реквизиты PDF
              </Text>
              <RightArrow width={2} padding={3} color={'jordyBlue'} />
            </MobileDownloadLink>
            <Divider />
            <ButtonWithArrow
              border={'none'}
              text={'Изменить способ оплаты'}
              handler={handleChangeStep}
              color={'red'}
            />
            <NavLink
              path={'/'}
              fontWeight={500}
              margin={'10px 0 0 0'}
              $fullWidth>
              Вернуться на главную страницу
            </NavLink>
          </div>
        );
      }}
    />
  );
};
