import {Modal} from '@/components/common/PurchaseProducts';
import {useCreateTicket} from '@/graph-hooks/tickets/createTickets';
import {FC, useState} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import Button from 'styles/common/Button';
import * as UI from 'styles/diagnostics/components/index';
import {SelectInput} from 'styles/user/userProfile';
import {useRouter} from 'next/router';

interface INewTicketModal {
  isModalOpen: boolean;
  closeModal: () => void;
}

const NewTicketModal: FC<INewTicketModal> = ({isModalOpen, closeModal}) => {
  const {register, handleSubmit, control} = useForm();

  const ticketsType = [
    {label: 'Техническая поддержка', value: 'Техническая поддержка'},
    {label: 'Финансовая поддержка', value: 'Финансовая поддержка'},
    {label: 'Другое', value: 'Другое'},
  ];

  const {createTicket} = useCreateTicket();

  const {reload} = useRouter();

  const [isBtnDisabled, setDisabled] = useState(false);

  const onSubmit: SubmitHandler<any> = (data) => {
    setDisabled(true);
    if (!isBtnDisabled) {
      createTicket({
        variables: {
          record: {
            title: data.title,
            body: data.body,
          },
        },
        onCompleted: () => {
          reload();
        },
      });
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal WrapperComponent={UI.ModalBlock} onClose={closeModal}>
      <UI.ModalInner>
        <UI.Title>Новый запрос</UI.Title>
        <UI.ModalForm onSubmit={handleSubmit(onSubmit)}>
          <UI.QuestionsWrapper>
            <UI.InputWrapper mw={440}>
              <UI.Label>Тема</UI.Label>
              <UI.Input {...register('title', {required: true})} />
            </UI.InputWrapper>

            <UI.InputWrapper mw={440}>
              <UI.Label>Отдел</UI.Label>
              <Controller
                name='type'
                control={control}
                rules={{required: true}}
                render={({field: {onChange}}) => (
                  <SelectInput
                    options={ticketsType}
                    onChange={(e) => {
                      onChange(e.value);
                    }}
                  />
                )}
              />
            </UI.InputWrapper>
          </UI.QuestionsWrapper>
          <UI.InputWrapper>
            <UI.Label>Текст запроса</UI.Label>
            <UI.TextArea {...register('body', {required: true})} />
          </UI.InputWrapper>
          <UI.Controllers>
            <Button width={160} $isDisabled={isBtnDisabled}>
              Отправить
            </Button>
          </UI.Controllers>
        </UI.ModalForm>
      </UI.ModalInner>
    </Modal>
  );
};

export default NewTicketModal;
