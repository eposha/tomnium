import {AccordionItem} from '@/components/common/AccordionItem';
import {Loader} from '@/components/common/Loader';
import NewTicketModal from '@/components/diagnostics/Modal/NewTicketModal';
import TicketsBlock from '@/components/diagnostics/TicketsBlock';
import {FAQ_TYPES} from '@/constants/faqs';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import {useMyTickets} from '@/graph-hooks/tickets/useMyTickets';
import {useModal} from 'src/hooks/useModal';
import {FaqContainer} from 'styles/consultations/page';
import {FAQ} from 'styles/courses';
import {MainWrapper, ContentWrapper} from 'styles/diagnostics/index';
import {Text} from 'styles/common';

const DiagnosticsPage = () => {
  const {data, loading} = useMyTickets({});
  const {isOpen, onClose, onOpen} = useModal();

  const {faqId} = useFaqsFromDirectories(FAQ_TYPES.FAQ_TYPE_TICKET);
  const {faqs} = useFaqs(faqId);

  return (
    <MainWrapper>
      <Loader $isVisible={loading} />
      <ContentWrapper>
        <TicketsBlock Tickets={data?.ticketsMy?.Tickets} openModal={onOpen} />
        <NewTicketModal isModalOpen={isOpen} closeModal={onClose} />
        {faqs && (
          <FaqContainer>
            <Text fontSize='20px'>Часто задаваемые вопросы</Text>
            <FAQ>
              {faqs?.FaqOptions?.map((item, index) => (
                <AccordionItem item={item} key={`${item.title}_${index}`} />
              ))}
            </FAQ>
          </FaqContainer>
        )}
      </ContentWrapper>
    </MainWrapper>
  );
};

export default DiagnosticsPage;
