import {
  ADD_CURRENCY,
  FETCH_CURRENCY_SUCCESS,
  REMOVE_CURRENCY,
  USD_VAL_ONCHANGE
} from "../actions/types";
import { Currencies } from "../constants";

const initialState = {
  rates: [],
  usd_value: 10.0
};

/**
 * 
 * @param {Object} state state tree 
 * @param {Object} action action dispatched from action creators 
 */
export const currencyReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        rates: manipulatedRates(action.payload)
      };
    case ADD_CURRENCY:
      return {
        ...state,
        rates: updateCurrencyToTrue(state.rates, action.payload)
      };
    case REMOVE_CURRENCY:
      return {
        ...state,
        rates: updateCurrencyToFalse(state.rates, action.payload)
      };
    case USD_VAL_ONCHANGE:
      return {
        ...state,
        rates: state.rates.map(rate => ({
					...rate,
					rateTotal: rate.rateVal * action.payload
				}))
      };
    default:
      return state;
  }
};

/**
 * 
 * @param {Array} rates array of rates
 * @param {String} symbol currency symbol ex: "IDR" or "USD" 
 * @returns {Array} new array with modified element of symbol
 * @description equals to removing item from currency list
 */
function updateCurrencyToFalse(rates, symbol) {
  let mappedRates = rates.map(rate => {
    if (rate.name === symbol) {
      return { ...rate, show: false };
    } else {
      return rate;
    }
  });
  return mappedRates;
}

/**
 * 
 * @param {Array} rates array of rates
 * @param {String} symbol currency symbol ex: "IDR" or "USD" 
 * @returns {Array} new array with modified element of symbol
 */

function updateCurrencyToTrue(rates, symbol) {

  let currency = rates.find(rate => rate.name === symbol);
  let filteredRates = rates.filter(rate => rate.name !== symbol);
  let addedCurrencyToRates = [...filteredRates, {...currency, show: true}]
  return addedCurrencyToRates;
}

/**
 * 
 * @param {Object} data an object of rates from API
 * @returns {Array} manipulation of object properties to be array of objects  
 */
function manipulatedRates(data) {
  const rates = Object.keys(data.rates).map(
    rate =>
      rate !== "USD" && {
        name: rate,
        desc: Currencies.find(curr => curr.key === rate).desc,
        rateVal: data.rates[rate],
        rateTotal: data.rates[rate] * initialState.usd_value,
        show: false
      }
  );
  return rates;
}
