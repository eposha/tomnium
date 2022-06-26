import {useQuery} from '@apollo/client';
import {DocumentsSortInput} from 'src/graphql.schema';
import {DOCUMENTS} from '@/query/documents/documentsList';
import {IDocument} from '@/types/document';
import {IPagination} from '@/types/common';

export interface IGetDocumentsResponse {
  documents: {
    Documents: IDocument[];
    Pagination: IPagination;
  };
}

export const useDocuments = (variables: {
  filter: {
    categoryIds: string | string[] | undefined;
  };
  offset?: number | number[];
  sort?: DocumentsSortInput;
}) => {
  const {data, loading, refetch} = useQuery<IGetDocumentsResponse>(DOCUMENTS, {
    variables,
    fetchPolicy: 'network-only',
  });
  return {
    documents: data?.documents,
    loading,
    refetch,
  };
};

export default useDocuments;
