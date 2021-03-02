// React contex API (similar but easier than Redux)
// to avoid prop drilling, called setup data layer, like creating a global variable
// We need this to track the basket
import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use redux inside of a component 
export const useStateValue = () => useContext(StateContext);


 