import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShouwFlag(!faceShouFlag);
  };

  const [num, setNum] = useState(0);
  const [faceShouFlag, setFaceShouwFlag] = useState(false);

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShouFlag || setFaceShouwFlag(true);
      } else {
        faceShouFlag && setFaceShouwFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num])

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShouFlag && <p>(o^^o)</p>}
    </>
  );
};

export default App;
