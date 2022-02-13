import React, { useContext } from "react";
import { UserContext, LanguageContext } from "./App";

const ContextC = () => {
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);
  return (
    <div>
      <div>
        {user.name}:{language}
      </div>
      {/* 以下はuseContextを使わないやり方 */}
      {/* <UserContext.Consumer>
        {(user) => {
          return (
            <LanguageContext.Consumer>
              {(language) => {
                return (
                  <div>
                    {user.name}:{language}
                  </div>
                );
              }}
            </LanguageContext.Consumer>
          );
        }}
      </UserContext.Consumer> */}
    </div>
  );
};

export default ContextC;
