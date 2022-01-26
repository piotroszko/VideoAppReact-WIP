import React, { createContext, useState } from "react";

export const DarkmodeContext = createContext(document.documentElement.classList.contains("dark"));

const DarkmodeProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(document.documentElement.classList.contains("dark"));
  const changeMode = () => {
    setIsDarkmode(!isDarkmode);
  };
  return (
    <DarkmodeContext.Provider value={{ isDarkmode, changeMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

export default DarkmodeProvider;
