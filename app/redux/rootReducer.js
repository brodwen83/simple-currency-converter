import { combineReducers } from 'redux';

import currencies from './currencies/currencies.reducer';
import theme from './theme/theme.reducer';

export default combineReducers({
  currencies,
  theme,
});
