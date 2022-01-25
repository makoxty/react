import React, { useState } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // propsには name と price が入っている
  // nameには空文字、priceには1000
  console.log({ props });

  // stateには name と price が入っている
  // nameには空文字、priceには1000
  console.log({ state });

  return (
    <>
      <p>現在の{name}さんの合計は、{price}円です。</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
