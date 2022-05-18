import { useState, useTransition } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

function App() {
  const [showFlg, setShowFlg] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(() => {
      setShowFlg(true);
    });
  };

  return (
    <>
      {showFlg ? (
        <SecondPage />
      ) : (
        <FirstPage isPending={isPending} handleClick={() => handleClick()} />
      )}
    </>
  );
}

export default App;
