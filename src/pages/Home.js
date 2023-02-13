import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const currency = useSelector((state) => state.currency.allData.usd);
  const date = useSelector((state) => state.currency.allData.date);
  const currencyList = Array.from(Object.entries(currency || {})).map((item) => (
    <div key={item[0]}>
      <p>
        USD:
        {' '}
        {item[1]}
        {' '}
        {item[0]}
      </p>
    </div>
  ));
  return (
    <div>
      <h2>
        Date:
        {' '}
        {date}
      </h2>
      {currencyList}
    </div>
  );
}
