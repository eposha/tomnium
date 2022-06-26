import {GET_SALES, IGetSalesResponse} from '@/query/sales/getSales';
import {useQuery} from '@apollo/client';

export const useGetSales = () => {
  const {data, loading} = useQuery<IGetSalesResponse>(GET_SALES);
  return {
    banners: data?.banners || [],
    loading,
  };
};
