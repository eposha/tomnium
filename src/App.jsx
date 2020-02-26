import React, { useState } from "react";
import CurrencyList from "./currency/CurrencyList";
import "./app.scss";

const App = () => {
  const [isShowTable, toggleShowTable] = useState(false);

  return (
    <div className="exchange">
      <button
        className="show-rates-btn"
        onClick={() => toggleShowTable(!isShowTable)}
      >
        {isShowTable ? "Hide Rates" : "Show Rates"}
      </button>
      {isShowTable ? <CurrencyList /> : ""}
    </div>
  );
};

export default App;
