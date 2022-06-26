import {ProfileUpdateInput} from 'src/graphql.schema';

const getValueField = (value: any) => {
  return value || undefined;
};

export const toPointerForUpdateUser = (credentials: ProfileUpdateInput) => {
  return {
    fullName: getValueField(credentials?.fullName),
    phone: getValueField(credentials?.phone),
    primaryLanguageId: getValueField(credentials.primaryLanguageId),
    timezone: getValueField(credentials.timezone),
    currencyId: getValueField(credentials?.currencyId),
  };
};
