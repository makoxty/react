import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // prev◯◯は現在のステートの値を取得できる
  // 今回はcountの現在値を取得するため、prevCountとしている
  // Reactでは count + 1 とするのではなく、prevCount + 1 とするのが良いそうだ
  const inc = () => setCount((prevCount) => prevCount + 1);


  const numbers = [2, 4, 6];

  // mapを使う時は必ず key を指定する必要がある
  // mapはindexを取得できるが、keyにindexを使用することは非推奨とされている
  const ListItem = () => {
    const items = numbers.map((item) =>
      <li key={item.toString()}>{item}</li>);
    return <ul>{items}</ul>
  }

  return (
    <>
      <p>現在のカウント数={count}</p>
      <button onClick={inc}>+</button>
      <ListItem />
    </>
  );
}

export default App;
