import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [screenSize, getScreenSize] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setScreenSize = () => {
    getScreenSize({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setScreenSize);

    screenSize.dynamicWidth >= 850 && setToggleNav(false);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, [screenSize]);

  const value = {
    setActiveLink,
    activeLink,
    screenSize,
    toggleNav,
    setToggleNav,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
