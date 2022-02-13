import React, { useState } from "react";

const CounterHook = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementCountTen = () => {
    // このやり方はNG
    // 前回の値に対して処理をするのであればprev◯◯を使う
    // setCount(count + 10);
    setCount((prevCount) => prevCount + 10);
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>カウント +</button>
        <button onClick={incrementCountTen}>カウント 10 +</button>
      </div>
    </>
  );
};

export default CounterHook;
