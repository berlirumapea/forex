import { ADD_CURRENCY, FETCH_CURRENCY_REQUEST, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE, REMOVE_CURRENCY, UPDATE_USD_VALUE } from "../actions/types";
import { Currencies, DefaultSymbols } from '../constants'

const initialState = {
	rates: [],
	symbols: [...DefaultSymbols],
	usd_value: 10.00
}

export const currencyReducers = (state = initialState, action) => {
	switch(action.type){
		case FETCH_CURRENCY_SUCCESS:
			return {
				...state,
				rates: manipulatedRates(action.payload)
			}
		default:
			return state
	}
}

export const manipulatedRates = (data) => {
	const rates = Object.keys(data.rates).map(
		rate =>
			rate !== "USD" && {
				name: rate,
				desc: Currencies.find(curr => curr.key === rate).desc,
				rateVal: data.rates[rate],
				rateTotal: data.rates[rate] * initialState.usd_value
			}
	);
	return rates;
}

