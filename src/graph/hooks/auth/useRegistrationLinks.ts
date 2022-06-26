import {useQuery} from '@apollo/client';
import {
  IRegistrationLinksResponse,
  REGISTRATION_LINKS,
} from '@/mutations/auth/register';

export const useRegistrationLinks = () => {
  const {data, loading: loadingLinks} = useQuery<IRegistrationLinksResponse>(
    REGISTRATION_LINKS,
    {
      fetchPolicy: 'network-only',
    },
  );
  return {
    registrtionLinks: data?.directories?.Settings || null,
    loadingLinks,
  };
};
