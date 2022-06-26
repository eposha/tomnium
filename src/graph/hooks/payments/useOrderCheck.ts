import {useApolloClient} from '@apollo/client';
import {IOrderCheckResponse, ORDER_CHECK_QUERY} from '@/query/payments';
import {OrderCheckInput, OrderPrice} from 'src/graphql.schema';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Control} from 'react-hook-form/dist/types/form';
import {FieldErrors} from 'react-hook-form/dist/types/errors';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

export interface IUseOrderCheck {
  price?: OrderPrice | null;
  couponCode?: string;
  loading?: boolean;
  error?: any | null;
  getPrice: () => void;
  onActivePromo: () => void;
  control: Control<any>;
  formErrors: FieldErrors<any>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<null | any>>;
}

export const useOrderCheck = (options: OrderCheckInput): IUseOrderCheck => {
  const [price, setPrice] = useState<OrderPrice | null>(null);
  const [couponCode, setCouponCode] = useState<string | undefined>();
  const apolloClient = useApolloClient();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors: formErrors},
  } = useForm({
    defaultValues: {
      couponCode: '',
    },
    mode: 'all',
  });

  const getPrice = async () => {
    if (!options?.productId || !options?.productCount) return;
    setLoading(true);
    try {
      const {data} = await apolloClient.query<IOrderCheckResponse>({
        query: ORDER_CHECK_QUERY,
        variables: {record: {...options, couponCode}},
        fetchPolicy: 'no-cache',
      });
      const res = await data?.orderCheck;
      if (!res?.default) {
        throw new Error();
      }
      setPrice(res);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrice();
  }, [options?.productCount]);

  const onActivePromo: SubmitHandler<{couponCode?: string}> = async (
    credentials,
  ) => {
    if (
      !options?.productId ||
      !options?.productCount ||
      !credentials?.couponCode
    )
      return;
    try {
      const {data} = await apolloClient.query<IOrderCheckResponse>({
        query: ORDER_CHECK_QUERY,
        variables: {record: {...options, ...credentials}},
        fetchPolicy: 'no-cache',
      });
      const res = data?.orderCheck;
      if (!res) {
        throw new Error();
      }
      setPrice(res);
      setCouponCode(credentials.couponCode);
      setSuccess(true);
      setError(null);
    } catch (e) {
      console.log(e);
      setSuccess(false);
      setError(e);
    } finally {
      setLoading(false);
    }
    reset({couponCode: ''});
  };

  return {
    control,
    formErrors,
    getPrice,
    onActivePromo: handleSubmit(onActivePromo),
    couponCode,
    price: price,
    loading,
    error,
    success,
    setSuccess,
    setError,
  };
};
