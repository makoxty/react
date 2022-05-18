import React, { useEffect } from "react";

const SecondPage = () => {
  function sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }

  useEffect(() => {
    sleep(5000);
  }, []);
  return <p>SecondPage</p>;
};

export default SecondPage;
