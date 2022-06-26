// import {DIRECTORIES_FAQS} from '@/query/directories';
// import {useQuery} from '@apollo/client';
import {useDirectories} from '@/graph-hooks/directories';

export interface IGetFaqsDirectoriesResponse {
  directories: {
    Settings: {
      faqIdCard: string;
      faqIdConsultations: string;
      faqIdCourses: string;
      faqIdPriceList: string;
      faqIdTicket: string;
      faqIdDocuments: string;
      faqIdCash: string;
    };
  };
}

export const useFaqsFromDirectories = (type: string) => {
  // const {data, loading, refetch} = useQuery<IGetFaqsDirectoriesResponse>(
  //   DIRECTORIES_FAQS,
  //   {
  //     fetchPolicy: 'network-only',
  //   },
  // );

  const {directories, loading, refetch} = useDirectories();

  //@ts-ignore
  const id = Number.isInteger(Number(directories?.Settings?.[type]));
  //@ts-ignore
  const faqId = id ? Number(directories?.Settings?.[type]) : null;

  return {
    faqId,
    loading,
    refetch,
  };
};
