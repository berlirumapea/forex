import 'cross-fetch/polyfill';
import { DefaultSymbols } from '../constants'

import { ADD_CURRENCY, FETCH_CURRENCY_REQUEST, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE, REMOVE_CURRENCY,  USD_VAL_ONCHANGE } from "./types";

function fetchCurrencyRequest() {
  return {
    type: FETCH_CURRENCY_REQUEST
  }
}

function fetchCurrencySuccess(data) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: data
  }
}

function fetchCurrencyFailure(err) {
  return {
    type: FETCH_CURRENCY_FAILURE,
    err
  }
}


export function fetchCurrency() {
  return async dispatch => {
    dispatch(fetchCurrencyRequest())
    try {
      const res = await fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${DefaultSymbols.join(',')}`);
      const data = await res.json();
      return dispatch(fetchCurrencySuccess(data));
    }
    catch (err) {
      return dispatch(fetchCurrencyFailure(err));
    }}
};

export function addCurrency(symbol) {
  return {
    type: ADD_CURRENCY,
    payload: symbol
  }
};

export function removeCurrency(symbol) {
  return {
    type: REMOVE_CURRENCY,
    payload: symbol
  }
}

export function updateUSDValue(val) {
  return {
    type: USD_VAL_ONCHANGE,
    payload: val
  }
}