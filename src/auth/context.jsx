import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const getLocalToken = () => {
  let myToken = localStorage.getItem("token");
  if (myToken) {
    return (myToken = JSON.parse(localStorage.getItem("token")));
  } else {
    return [];
  }
};

const UserContextMain = ({ children }) => {
  const [token, setToken] = useState(getLocalToken());

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <AppContext.Provider value={[token, setToken]}>
      {children}
    </AppContext.Provider>
  );
};

export default UserContextMain;
