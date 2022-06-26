import {Modal} from '@/components/common/PurchaseProducts';
import {useModal} from 'src/hooks/useModal';
import styled from 'styled-components';
import {InnerFlexCenter} from 'styles/payments';
import {ContainerWithCustomScroll} from 'styles/common';
import {Message} from '@/components/common/message';
import {useEffect, useState} from 'react';
import {generate} from 'generate-password';

interface IProps {
  errors?: Array<string | undefined>;
  WrapperComponent: React.ElementType;
  type: 'mobile' | 'desktop';
  isMainWrapper?: boolean;
  positionMainWrapper?: 'fixed' | 'absolute';
}

const Inner = styled(InnerFlexCenter)<{maxHeight: string}>`
  padding: 10px;
  box-sizing: border-box;
  max-height: ${({maxHeight}) => maxHeight};
`;
const InnerErrors = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ErrMsg = ({text, deleteMsg}: {text: string; deleteMsg: () => void}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
    deleteMsg();
  };
  return (
    <Message text={text} type={'error'} isOpen={isOpen} handleClose={onClose} />
  );
};

export const ErrorModal: React.FC<IProps> = ({
  errors,
  WrapperComponent,
  type,
  isMainWrapper,
  positionMainWrapper,
}) => {
  const [errorsState, setErrors] = useState(errors?.filter((error) => !!error));
  const {isOpen, onOpen, onClose} = useModal();

  useEffect(() => {
    const res = errors?.filter((error) => !!error);
    setErrors(res);
  }, [errors]);

  useEffect(() => {
    const val = Boolean(errorsState?.length);
    val ? onOpen() : onClose();
  }, [errorsState]);

  const deleteMsg = (item?: string) => () => {
    setErrors((prev) => prev?.filter((error) => error !== item));
  };

  const handleClose = () => {
    setErrors([]);
  };

  if (!isOpen) return null;

  return (
    <Modal
      positionMainWrapper={positionMainWrapper}
      isMainWrapper={isMainWrapper}
      WrapperComponent={WrapperComponent}
      onClose={handleClose}>
      <Inner maxHeight={type === 'mobile' ? '100vh' : '100%'}>
        <ContainerWithCustomScroll
          height={'auto'}
          maxHeight={type === 'mobile' ? 'calc(100vh - 20px)' : '100%'}>
          <InnerErrors>
            {errorsState?.map((error) => {
              const id = generate({
                length: 10,
                numbers: true,
              });
              return (
                <ErrMsg
                  key={id}
                  // @ts-ignore
                  text={error}
                  deleteMsg={deleteMsg(error)}
                />
              );
            })}
          </InnerErrors>
        </ContainerWithCustomScroll>
      </Inner>
    </Modal>
  );
};
