import React, { useState, useEffect } from "react";

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinranking.com/v2/coins")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.data.coins);
        console.log(coins);
      });
  }, []);

  return (
    <>
      <div className="flex h-fit p-4 justify-center items-center">
        <div className="grid grid-cols-4 gap-4 p-4 w-2/3 h-fit shadow-2xl border rounded-lg">
          {coins.map((coin) => (
            <div className="flex flex-col gap-2 shadow-2xl rounded-lg p-2">
              <h1>Name : {coin.name}</h1>
              <h1>Symbol : {coin.symbol} </h1>
              <h1>Price : {coin.price.slice(0, 10)}$</h1>
              <h1>Rank : {coin.rank}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
