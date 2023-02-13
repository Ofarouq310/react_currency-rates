import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCHCURRENCY = 'CURRENCY/FETCHCURRENCY';
const baseURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';

export const fetchCurrency = createAsyncThunk(
  FETCHCURRENCY,
  async (args, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: FETCHCURRENCY, payload: response.data });
  },
);

const initialState = { allData: [] };
const fetchCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCURRENCY:
      return {
        ...state,
        allData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCurrencyReducer;
