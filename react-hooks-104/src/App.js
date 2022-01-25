import React, { useEffect, useState } from "react";

const App = props => {

  const [state, setState] = useState(props);
  const { name, price } = state;

  // 画面を再描画すると呼ばれる
  useEffect(() => {
    console.log("useEffectメソッドです");
  });

  // 初期表示時しか呼ばれない
  useEffect(() => {
    console.log("[]を指定したuseEffectメソッドです");
  }, []);

  // 特定のパラメータが変更された時だけ呼び出される
  // 今回の場合は name が変更された時
  useEffect(() => {
    console.log("nameを変更しました。");
  }, [name]);

  return (
    <>
    <p>現在の{name}さんの合計は、{price}円です。</p>
    <button onClick={() => setState({...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: price - 1})}>-1</button>
    <button onClick={() => setState(props)}>Reset</button>
    <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
