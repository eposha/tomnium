import React, { useState, useEffect } from "react";
import getCurrencies from "../fakeAPI/fakeAPI";
import "./CurrencyList.scss";

const CurrencyList = () => {
  const [currency, setCurrency] = useState({ rates: {} });

  useEffect(() => {
    getCurrencies().then(res => setCurrency(res));
  }, []);

  let currencyList = Object.entries(currency.rates).map(rate => (
    <li className="currence__item" key={rate[0]}>
      <span className="currency__current">{rate[0]}</span>
      <span className="currency__rate">{rate[1]}</span>
    </li>
  ));

  return (
    <div className="currency">
      <div className="list__title">
        <h2 className="title">Exchange Rates</h2>
      </div>
      <div className="updated-date">
        <div className="date">
          {new Date(currency.timestamp * 1000).toLocaleString()}
        </div>
      </div>
      <div className="currency__base">{currency["base"]}</div>
      <ul className="currency__list">{currencyList}</ul>
    </div>
  );
};

export default CurrencyList;
