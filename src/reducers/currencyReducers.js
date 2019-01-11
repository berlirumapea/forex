import {
  ADD_CURRENCY,
  FETCH_CURRENCY_SUCCESS,
  REMOVE_CURRENCY,
  USD_VAL_ONCHANGE
} from "../actions/types";
import { Currencies, DefaultSymbols } from "../constants";

const initialState = {
  rates: [],
  symbols: [...DefaultSymbols],
  usd_value: 10.0
};

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

function updateCurrencyToTrue(rates, symbol) {
  let mappedRates = rates.map(rate => {
    if (rate.name === symbol && !rate.show) {
      return { ...rate, show: true };
    } else {
      return rate;
    }
  });
  return mappedRates;
}

function manipulatedRates(data) {
  const rates = Object.keys(data.rates).map(
    rate =>
      rate !== "USD" && {
        name: rate,
        desc: Currencies.find(curr => curr.key === rate).desc,
        rateVal: data.rates[rate],
        rateTotal: data.rates[rate] * initialState.usd_value,
        show: true
      }
  );
  return rates;
}
