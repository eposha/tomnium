import {ApolloQueryResult} from '@apollo/client/core/types';
import type {GetServerSidePropsContext} from 'next';

export const withErrorHandler = async (
  ctx: GetServerSidePropsContext,
  request: Promise<ApolloQueryResult<unknown>>,
  fieldName?: string,
) => {
  try {
    const {data} = (await request) || {};
    //@ts-ignore
    return data?.[fieldName] ?? data;
  } catch (error) {
    //@ts-ignore
    if (error.message === 'Not authenticated') {
      const {res} = ctx;
      res.statusCode = 302;
      res.setHeader('location', `/auth/login`);
    }
    console.log(error);
    return {};
  }
};
