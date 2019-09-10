import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from './currencies.action';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  convertions: {},
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };
    default:
      return state;
  }
};
