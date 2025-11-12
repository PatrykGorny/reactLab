import { people } from "../module-data";
import AppReducer from "../data/AppReducer";
import { useReducer } from "react";
import AppContext from "../data/AppContext";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, people);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
