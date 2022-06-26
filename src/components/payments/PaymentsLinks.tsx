import {CardsWrapper, CardsInner} from 'styles/payments/paymentsLinkCard';
import LinkCard from './LinksCard';

const PaymentsLinks = () => {
  return (
    <CardsWrapper>
      <CardsInner>
        {LinksListItems.map((elem) => {
          return <LinkCard key={elem.img} obj={elem} />;
        })}
      </CardsInner>
    </CardsWrapper>
  );
};

export const LinksListItems = [
  {
    name: 'Курсы',
    url: '/courses',
    description: 'Каталог всех обучающих программ платформы',
    img: '/icons/payments-links/Courses.jpeg',
  },
  {
    name: 'Обучение',
    url: '/my-courses',
    description: 'Курсы, которые вы начали проходить',
    img: '/icons/payments-links/Education.jpeg',
  },
  // {
  //   name: 'Центр',
  //   url: '/center',
  //   description: 'Важная информация о прогрессе вашего развития',
  //   img: '/icons/payments-links/Center.jpeg',
  // },
  {
    name: 'Чаты',
    url: '/chats',
    description: 'Общение в рамках потоков курсов',
    img: '/icons/payments-links/Chats.jpeg',
  },
  {
    name: 'Консультации',
    url: '/consultations',
    description: 'Индивидуальная поддержка специалистов',
    img: '/icons/payments-links/Consult.jpeg',
  },
  {
    name: 'Диагностика',
    url: '/diagnostics',
    description: 'Анализ сфер жизни, которые требуют вашего внимания',
    img: '/icons/payments-links/Diagnostics.jpeg',
  },
];

export default PaymentsLinks;
