import { PRODUCT_ACTIVATE } from '@/query/subscription/productActivate';
import { useMutation } from '@apollo/client';
export const useProductActivate = () => {
 const [productActivate] = useMutation(PRODUCT_ACTIVATE)

 return { productActivate }
}