export const convertToLargeAmount = (value?: number | null) => {
  return value ? Math.floor(value * 100) / 10000 : 0;
};

export const getPrice = (value?: number | null) => {
  const sum = convertToLargeAmount(value);
  if (!sum) return 0;

  const smallСhange = String(sum).split('.')?.[1]?.padEnd(2, '0');
  const bigChange = String(sum).split('.')?.[0];

  return smallСhange ? bigChange + '.' + smallСhange : sum;
};
