import { currencyReducers } from "../reducers/currencyReducers";
import {
  FETCH_CURRENCY_SUCCESS,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
  USD_VAL_ONCHANGE
} from "../actions/types";
import { DefaultSymbols } from "../constants";

let initialState = {
  rates: [],
  symbols: [...DefaultSymbols],
  usd_value: 10.0
};

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(currencyReducers(undefined, {})).toEqual(initialState);
  });

  describe("FETCH_CURRENCY_SUCCESS", () => {
    it("should return manipulated currency", () => {
      let payloadFromAPI = {
        rates: { GBP: 0.7839011704 },
        base: "USD",
        date: "2019-01-10"
      };

      let expectedResult = {
        rates: [
          {
            name: "GBP",
            desc: "British Pounds",
            rateVal: 0.7839011704,
            rateTotal: 0.7839011704 * initialState.usd_value,
            show: true
          }
        ]
      };

      expect(
        currencyReducers(
          {},
          {
            type: FETCH_CURRENCY_SUCCESS,
            payload: payloadFromAPI
          }
        )
      ).toEqual(expectedResult);
    });
  });

  describe("ADD_CURRENCY", () => {
    it("should not update the show status to true if it's already true", () => {
      let currentState = {
        rates: [
          {
            name: "GBP",
            show: true
          }
        ]
      };
      expect(
        currencyReducers(currentState, { type: ADD_CURRENCY, payload: "GBP" })
      ).toEqual(currentState);
    });

    it("should update show status in currencry to true if it false", () => {
      let state = {
        rates: [
          {
            name: "GBP",
            show: true
          },
          {
            name: "IDR",
            show: false
          }
        ]
      };

      let expectedStateResult = {
        rates: [
          {
            name: "GBP",
            show: true
          },
          {
            name: "IDR",
            show: true
          }
        ]
      };

      expect(
        currencyReducers(state, { type: ADD_CURRENCY, payload: "IDR" })
      ).toEqual(expectedStateResult);
    });
  });

  describe("REMOVE_CURRENCY", () => {
    it("should remove or update currency's show status to false", () => {
      let state = {
        rates: [
          {
            name: "GBP",
            show: true
          }
        ]
      };

      let expectedStateResult = {
        rates: [
          {
            name: "GBP",
            show: false
          }
        ]
      };

      expect(
        currencyReducers(state, { type: REMOVE_CURRENCY, payload: "GBP" })
      ).toEqual(expectedStateResult);
    });
  });

  describe("USD_VAL_ONCHANGE", () => {
    it("should calculate total rate value when usd value changed", () => {
      let state = {
        rates: [
          {
            name: "GBP",
            rateVal: 0.7839011704,
            rateTotal: 0.7839011704
          }
        ]
      };

      let expectedStateResult = {
        rates: [
          {
            name: "GBP",
            rateVal: 0.7839011704,
            rateTotal: 0.7839011704 * 10.0
          }
        ]
      };

      expect(
        currencyReducers(state, { type: USD_VAL_ONCHANGE, payload: 10.00 })
      ).toEqual(expectedStateResult);
    });
  });
});
