import {UserCards, UserTransactions} from '@/components/user/payments';
import {useGetCards} from '@/graph-hooks/cards/useGetCards';
import {useTransactions} from '@/graph-hooks/user/payments/useTransactions';
// import {initApollo} from 'public/lib/initApollo';
// import {GET_MY_CARDS} from '@/query/user/payments/getMyCards';
// import {GET_TRANSACTIONS} from '@/query/user/payments/getTransactions';
import {ICard} from '@/types/card';
import {IPagination} from '@/types/common';
import {ITransaction} from '@/types/transactions';
import {Loader} from '@/components/common/Loader';
import {
  // GetServerSideProps,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import {UserLayout} from 'src/components/user';
import useDateFilter from 'src/hooks/filters/useDateFilter';
import * as UI from 'styles/user/payments/common';

interface IUserPaymentsProps {
  ssrMyCards: {
    id: string;
    displayName: string;
    Cards: ICard[];
  }[];
  ssrTransactions: {
    Transactions: ITransaction[];
    Pagination: IPagination;
  } | null;
}

const UserPayments: NextPage<IUserPaymentsProps> = () => {
  const {
    query: {from, to, offset},
  } = useRouter();

  const filter = {createdAt: {from: from, to}};
  const {handleFilterRoute} = useDateFilter();

  const {cardsMy, loadingCardsMy} = useGetCards();

  const {transactions, loading} = useTransactions({
    offset: offset ? (+offset - 1) * 10 : undefined,
    filter,
  });

  return (
    <UserLayout>
      <>
        <Loader $isVisible={loadingCardsMy || loading} />
        <UI.PaymentWrapper>
          {!!cardsMy?.length && <UserCards cards={cardsMy} />}
          <UserTransactions
            transactions={transactions}
            handleFilterRoute={handleFilterRoute}
          />
        </UI.PaymentWrapper>
      </>
    </UserLayout>
  );
};

export default UserPayments;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const {
//     query: {from, to, offset},
//   } = ctx;

//   const apolloClient = initApollo(null, ctx);

//   const variables = {
//     filter: {
//       createdAt: {
//         from,
//         to,
//       },
//     },
//     offset: offset ? (+offset - 1) * 10 : undefined,
//   };

//   let cards;
//   let transactions;

//   try {
//     cards = await apolloClient.query({
//       query: GET_MY_CARDS,
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   try {
//     transactions = await apolloClient.query({
//       query: GET_TRANSACTIONS,
//       variables,
//     });
//   } catch (e) {
//     console.log(e);
//   }

//   return {
//     props: {
//       ssrMyCards: cards?.data?.cardsMy || [],
//       ssrTransactions: transactions?.data?.transactions || null,
//     },
//   };
// };
