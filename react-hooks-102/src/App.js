import React, { useState } from "react";

const App = props => {

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(1000);
    setName('');
  }

  return (
    <>
    <p>現在の{name}さんの合計は、{price}円です。</p>
    <button onClick={() => setPrice(price + 1)}>+1</button>
    <button onClick={() => setPrice(price - 1)}>-1</button>
    <button onClick={reset}>Reset</button>
    <input value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
