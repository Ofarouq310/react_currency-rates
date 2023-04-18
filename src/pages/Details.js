import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Details() {
  const currencies = useSelector((state) => state.currency.allData);
  const { currency } = useParams();
  const [currencyValues, setCurrencyValues] = React.useState({});

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const key = getKeyByValue(currencies, currency);
  const keyUpper = key && key.toUpperCase();

  const date = new Date().toISOString().slice(0, 10);
  React.useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/usd.json`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyValues(data.usd);
      });
  }, [date]);

  return (
    <div className="details-page">
      <div className="bkg-anim" />
      <div className="bkg-anim" />
      <div className="card--details-page">
        <h5 id="prv-page">
          <a href="/currencies_list">
            <i className="fa-solid fa-arrow-left" />
            Previous page
          </a>
        </h5>
        <div className="card-header">
          <div className="card--details">
            <p className="text--details-page">
              Currency Name:
              {' '}
              {currency}
            </p>
            <hr className="details-breaker" />
            <p className="text--details-page">
              Currency Symbol:
              {' '}
              {keyUpper || <span className="loading">Loading...</span>}
            </p>
            <hr className="details-breaker" />
            <p className="text--details-page">Base Currency: USD</p>
            <hr className="details-breaker" />
            <p className="text--details-page">
              Value:
              {' '}
              {currencyValues[key] || <span className="loading">Loading...</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
