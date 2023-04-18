import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
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
      <ScrollToTop smooth top={250} className="scroll-up-btn" />
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
              <i className="fa-solid fa-rotate arrow white" />
              <span className="card--text">API Status: Daily</span>
              <span className="white"> updated</span>
            </div>
            <h5 id="instructions">Click on your preferred currency to see the details</h5>
          </div>
          <div>
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
