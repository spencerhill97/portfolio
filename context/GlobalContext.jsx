import { useContext, createContext, useState, useRef } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const navigateToSearchBar = (element) => {
    element.current?.scrollIntoView({ block: "start" });
  };

  const value = { navigateToSearchBar };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
