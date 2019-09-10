import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './index';

const middleWare = [];
if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middleWare));
