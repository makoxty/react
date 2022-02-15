import React, { createContext, useContext, useReducer, useState } from "react";
import ContextA from "./ContextA";
import CounterHook from "./CounterHook";
import CounterReducer from "./CounterReducer";
import FormHook from "./FormHook";
import ItemHook from "./ItemHook";
import ComponentA from "./reducer_context.js/ComponentA";
import ComponentB from "./reducer_context.js/ComponentB";
import ComponentC from "./reducer_context.js/ComponentC";

export const CountContext = createContext();
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UserContext = createContext();
export const LanguageContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "yamda", age: "32" });
  const [language, setLanguage] = useState("日本語");

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CounterHook />
      <FormHook />
      <ItemHook />
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ContextA />
        </LanguageContext.Provider>
      </UserContext.Provider>
      <CounterReducer />
      <h1>useReducer × useContext</h1>
      <h2>カウント： {count.firstCounter}</h2>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </>
  );
}

export default App;
