import {FAQ_BY_ID, IFaqByIdResponse} from '@/query/faqs/faqById';
import {useQuery} from '@apollo/client';

export const useFaqs = (id: number | null) => {
  const {data, loading, refetch} = useQuery<IFaqByIdResponse>(FAQ_BY_ID, {
    variables: {
      id,
    },
    skip: !id,
  });

  return {
    faqs: data?.faq,
    loading,
    refetch,
  };
};
