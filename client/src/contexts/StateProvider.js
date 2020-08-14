// React context API (similar but easier than Redux)
// to avoid prop drilling, called setup data layer, like creating a global variable
import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

// Build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
