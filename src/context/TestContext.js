import React from "react";

export const TestContext = React.createContext();

export const TestProvider = props => {
  return (
    <TestContext.Provider value={"Hello2"}>
      {props.children}
    </TestContext.Provider>
  );
};
