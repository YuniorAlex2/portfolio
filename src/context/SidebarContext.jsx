import { createContext, useContext, useReducer } from "react";

const SideBarContext = createContext();

const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "sidebar/open":
      return { ...state, isOpen: true };

    case "sidebar/close":
      return { ...state, isOpen: false };
    default:
      throw new Error("Unknown action type");
  }
}

function SideBarProvider({ children }) {
  const [{ isOpen }, dispatch] = useReducer(reducer, initialState);

  return (
    <SideBarContext.Provider value={{ isOpen, dispatch }}>
      {children}
    </SideBarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SideBarContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return context;
}

export { SideBarProvider, useSidebar };
