import {format} from 'date-fns';
import NextLink from 'next/link';
import {Dispatch, SetStateAction} from 'react';
import {
  InnerSuccessModal,
  CloseButton,
  LinkModal,
  InnerLinkModal,
} from 'styles/datePicker/appointments';
import {Text} from 'styles/common';

interface IProps {
  selectedDate: Date;
  locale: Locale;
  setSuccess: Dispatch<SetStateAction<string | null>>;
}

export const SuccessModal: React.FC<IProps> = ({
  selectedDate,
  locale,
  setSuccess,
}) => {
  const handleClose = () => {
    setSuccess(null);
  };
  return (
    <InnerSuccessModal>
      <CloseButton onClick={handleClose} />
      <Text
        $description
        color={'black'}
        fontSize={'18px'}
        fontWeight={'600'}
        margin={'0 0 10px 0'}>
        Забронировано
      </Text>
      <Text
        $description
        color={'greyLight'}
        fontSize={'12px'}
        fontWeight={'500'}>
        {format(new Date(selectedDate), 'iiii, dd MMMM, HH:mm', {
          locale: locale,
        })}
      </Text>
      <InnerLinkModal>
        <NextLink href={'/consultations'} passHref>
          <a>
            <LinkModal
              fontSize={'14px'}
              $description
              fontWeight={'600'}
              color={'blueberry'}>
              Перейти в Мои консультации
            </LinkModal>
          </a>
        </NextLink>
      </InnerLinkModal>
    </InnerSuccessModal>
  );
};
