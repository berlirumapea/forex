import { currencyReducers } from '../reducers/currencyReducers';
import {} from '../actions/types';
import { DefaultSymbols } from '../constants'

const initialState = {
	rates: [],
	symbols: [...DefaultSymbols],
	usd_value: 10.00
}


describe('reducers', () => {
	it("should return the initial state", () => {
		expect(currencyReducers(undefined, {})).toEqual(initialState)
	})
	
})