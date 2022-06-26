import {
  InnerMainContentSecondary,
  InnerBankDetails,
  DownloadLink,
  ShowEmailButton,
  InnerLinks,
  BankDetailsInput,
  InnerBankDetailsInput,
  InnerFAQ,
} from 'styles/payments';
import {Text, ContainerWithCustomScroll, Button, Box} from 'styles/common';
import React, {useEffect, useState} from 'react';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import {FAQ_TYPES} from '@/constants/faqs';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';
import {AccordionItem} from '@/components/common/AccordionItem';

interface IProps {
  bankDetails?: {
    mfo?: string;
    companyCode?: string;
    accountNumber?: string;
  };
  onPayByCash: () => void;
}

const StyledText: React.FC<{align: 'right' | 'left'}> = ({children, align}) => {
  return (
    <Text
      $description
      fontSize={'14px'}
      fontWeight={'600'}
      color={'greyDark'}
      textAlign={align}>
      {children}
    </Text>
  );
};

export const PaymentByCash: React.FC<IProps> = ({bankDetails, onPayByCash}) => {
  const [isShowEmailInput, setIsShowEmailInput] = useState(false);

  useEffect(() => {
    onPayByCash();
  }, []);

  const showEmailInput = () => {
    setIsShowEmailInput((prev) => !prev);
  };
  const titleEmailButton = isShowEmailInput
    ? 'Скрыть поле для E-mail'
    : 'Отправить реквизиты на E-mail';

  const {faqId} = useFaqsFromDirectories(FAQ_TYPES.FAQ_TYPE_CASH);
  const {faqs} = useFaqs(faqId);

  return (
    <InnerMainContentSecondary>
      <Text $title margin={'0 0 20px 0'}>
        Оплатить через кассу или терминал
      </Text>
      <ContainerWithCustomScroll height={'421px'}>
        <InnerBankDetails>
          <StyledText align={'left'}>Номер счета:</StyledText>
          <StyledText align={'right'}>{bankDetails?.accountNumber}</StyledText>
          <StyledText align={'left'}>МФО:</StyledText>
          <StyledText align={'right'}>{bankDetails?.mfo}</StyledText>
          <StyledText align={'left'}>ЕДРПОУ:</StyledText>
          <StyledText align={'right'}>{bankDetails?.companyCode}</StyledText>
        </InnerBankDetails>
        <InnerLinks>
          <DownloadLink href='/vercel.svg' download>
            Скачать реквизиты PDF
          </DownloadLink>
          <ShowEmailButton onClick={showEmailInput}>
            {titleEmailButton}
          </ShowEmailButton>
        </InnerLinks>
        {isShowEmailInput && (
          <InnerBankDetailsInput>
            <BankDetailsInput placeholder={'Отправить реквизиты на E-mail'} />
            <Button $solid width={160}>
              Отправить
            </Button>
          </InnerBankDetailsInput>
        )}
        {faqs && (
          <Box mt={'45px'}>
            <Text $title>FAQ</Text>
            <InnerFAQ>
              <Box mb={'10px'}>
                {faqs?.FaqOptions?.map((item, index) => (
                  <AccordionItem
                    background={'whiteGrey'}
                    size={'middle'}
                    item={item}
                    key={`${item.title}_${index}`}
                  />
                ))}
              </Box>
            </InnerFAQ>
          </Box>
        )}
      </ContainerWithCustomScroll>
    </InnerMainContentSecondary>
  );
};
