/* eslint-disable implicit-arrow-linebreak */
import {
  takeEvery, select, call, put,
} from 'redux-saga/effects';

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from './currencies/currencies.action';

import { FIXER_API } from '../../config';

const getLatestRate = (currency: string) =>
  fetch(`${FIXER_API}/latest?base=${currency}`);

function* fetchLatestConversionRates(action: Object) {
  try {
    let { currency } = action;

    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    console.log('currency', currency);

    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (err) {
    yield put({ type: CONVERSION_ERROR, error: err.message });
  }
}

export default function* rootSaga(): Generator<void, void, void> {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
