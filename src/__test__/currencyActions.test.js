import { fetchCurrency, addCurrency, removeCurrency, updateUSDValue }from "../actions/CurrencyActions";
import * as types from "../actions/types";
import { DefaultSymbols } from '../constants'
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore();

describe("actions creator", () => {
  afterEach(() => {
		fetchMock.restore();
		store.clearActions();
	});
	
  it("should create FETCH_CURRENCY_SUCCESS when fetching currencies is done", async () => {
    fetchMock.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${DefaultSymbols.join(',')}`, {
			body: {
				rates: {},
				base: 'USD',
				date: ''
			}
		});
		const expectedActions = [
			{ type: types.FETCH_CURRENCY_REQUEST },
			{
				type: types.FETCH_CURRENCY_SUCCESS, payload: {
					rates: {},
					base: 'USD',
					date: ''
				}
			}
		];
		await store.dispatch(fetchCurrency())
		expect(store.getActions()).toEqual(expectedActions)
	});


	it("should dispatch ADD_CURRENCY action with new currency symbol", () => {

		const expectedActions = [
			{ type: types.ADD_CURRENCY, payload: 'IDR'}
		];

		store.dispatch(addCurrency("IDR"));
		expect(store.getActions()).toEqual(expectedActions);
	});

	it("should dispatch REMOVE_CURRENCY action with selected currency symbol", () => {

		const expectedActions = [
			{ type: types.REMOVE_CURRENCY, payload: 'IDR'}
		];

		store.dispatch(removeCurrency("IDR"));
		expect(store.getActions()).toEqual(expectedActions);
	})

	it("should dispatch USD_VAL_ONCHANGE action payload of USD value", () => {

		const expectedActions = [
			{ type: types.USD_VAL_ONCHANGE, payload: 5.00}
		];

		store.dispatch(updateUSDValue(5.00));
		expect(store.getActions()).toEqual(expectedActions);
	})
});





