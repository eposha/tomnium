import React, { useState, useEffect } from "react";
import promise from "../fakeAPI/fakeAPI";
import "./CurrencyList.scss";

const CurrencyList = () => {
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    promise().then(res => setCurrency(res));
  }, []);

  let currencyList = [];

  for (let key in currency.rates) {
    currencyList.push(
      <li className="currence__item" key={key}>
        <span className="currency__current">{`${key}`}</span>
        <span className="currency__rate">{`${currency.rates[key]}`}</span>
      </li>
    );
  }

  return (
    <div className="currency">
      <div className="list__title">
        <h2 className="title">Exchange Rates</h2>
      </div>
      <div className="currency__base">{currency["base"]}</div>
      <ul className="currency__list">{currencyList}</ul>
    </div>
  );
};

export default CurrencyList;
