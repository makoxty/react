import React, { createContext, useContext, useState } from "react";
import ContextA from "./ContextA";
import CounterHook from "./CounterHook";
import CounterReducer from "./CounterReducer";
import FormHook from "./FormHook";
import ItemHook from "./ItemHook";

export const UserContext = createContext();
export const LanguageContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "yamda", age: "32" });
  const [language, setLanguage] = useState("日本語");
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
    </>
  );
}

export default App;
