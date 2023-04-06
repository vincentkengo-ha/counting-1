import React, { useState, useEffect } from "react";

import { loadCountables, saveCountables } from "../storage/Storage";

export const CountablesContext = React.createContext();

const intialCountables = [
  { name: "Crow", count: 0 },
  { name: "Woodpecker", count: 3 },
];

export const CountablesProvider = ({ children }) => {
  const [countables, setCountables] = useState(intialCountables);

  useEffect(() => {
    loadCountables().then((result) => setCountables(result));
  }, []);

  const changeCounts = (amount, index) => {
    const newState = [...countables];
    newState[index].count += amount;
    setCountables(newState);
    saveCountables(newState);
  };

  const addNewCountable = (name) => {
    const newState = [...countables, { name, count: 0 }];
    setCountables(newState);
    saveCountables(newState);
  };

  return (
    <CountablesContext.Provider
      value={{ countables, changeCounts, addNewCountable }}
    >
      {children}
    </CountablesContext.Provider>
  );
};
