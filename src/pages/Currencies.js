import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Currency from '../components/Currency';

export default function Currencies() {
  const currency = useSelector((state) => state.currency.allData);
  const date = new Date().toISOString().slice(0, 10);
  const currencyList = Object.keys(currency || {})
    .map((cur) => (
      <Currency key={nanoid()} currency={currency[cur]} />
    ));

  const [search, setSearch] = React.useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCurrencies = currencyList.filter((currency) => {
    if (search === '') {
      return currency;
    }
    if (currency.props.currency.toLowerCase().includes(search.toLowerCase())) {
      return currency;
    }
    return null;
  });

  return (
    <div className="currency-list--page">
      <div className="currency-list--container">
        <div className="bkg-anim" />
        <div className="bkg-anim" />
        <div className="card">
          <div className="information">
            <h5 id="date">
              DATE:
              {' '}
              {date}
            </h5>
            <div>
              <i className="fa-solid fa-rotate arrow green" />
              <span className="card--text">API Status: Daily</span>
              <span className="green" id="updated"> updated</span>
            </div>
            <h5 id="instructions">Click on your preferred currency to see the details</h5>
          </div>
          <div className="search-holder">
            <input type="text" className="search-bar" placeholder="Search by currency" onChange={handleSearch} />
          </div>
          <div className="currency--list-grid">
            {filteredCurrencies}
          </div>
        </div>
      </div>
    </div>
  );
}
