import React from "react";

const FirstPage = ({ props, isPending, handleClick }) => {
  return (
    <>
      <h1>FirstPage</h1>
      <button onClick={() => handleClick()} disabled={isPending}>
        {isPending ? "SecondPageへ遷移中" : "SecondPageへ"}
      </button>
    </>
  );
};

export default FirstPage;
