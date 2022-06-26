export const PAYMENT_AUTH_STEPS = {
  login: 'login',
  register: 'register',
  reset: 'reset',
};

export const PAYMENT_STEPS = {
  auth: 'auth',
  createOrder: 'createOrder',
  choosePaymentSystem: 'choosePaymentSystem',
  payBy: {
    card: 'payByCard',
    cash: 'payByCash',
    otherWay: 'payByOtherWay',
  } as {[key: string]: string},
  confirmPayment: 'confirmPayment',
};

export const PAYMENT_METHODS = {
  card: 'card',
  cash: 'cash',
};

export const dataSteps = [
  {
    code: [PAYMENT_STEPS.auth, PAYMENT_STEPS.createOrder],
    title: 'Ваши личные данные',
  },
  {
    code: [PAYMENT_STEPS.choosePaymentSystem],
    title: 'Выбор метода оплаты',
  },
  {
    code: [
      PAYMENT_STEPS.payBy.card,
      PAYMENT_STEPS.payBy.cash,
      PAYMENT_STEPS.payBy.otherWay,
    ],
    title: 'Подтверждение оплаты',
  },
];
