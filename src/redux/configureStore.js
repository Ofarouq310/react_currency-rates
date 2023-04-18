import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import fetchCurrencyReducer from './currency/currency';

const rootReducer = combineReducers({
  currency: fetchCurrencyReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
