import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const DataContext = createContext()


export const Context = ({ children }) => {
    
  const [state, dispatch] = useReducer(reducer, {
    data: users,
    search: "",
    name: "",
    status: "",
    select: null,
  });
  
  return (
      <DataContext.Provider value={[state, dispatch]}>
          {children}
      </DataContext.Provider>
  );

};