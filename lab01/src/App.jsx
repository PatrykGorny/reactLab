import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Lab01 from "./pages/Lab01";
import Lab02 from "./pages/Lab02";
import NotFound from "./pages/NotFound";
import Lab03 from "./pages/Lab3Page";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import AppContext from "./data/AppContext";
import { people as data } from "./module-data";
import AddForm from "./component/AddForm";
import EditForm from "./component/EditForm";
function App() {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <>
      <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="lab01" element={<Lab01 />} />
            <Route path="lab02" element={<Lab02 />} />
            <Route path="lab02/:id" element={<Lab02 />} />
            <Route path="lab03" element={<Lab03 />} />
            <Route path="lab04/add" element={<AddForm />} />
            <Route path="lab04/edit/:id" element={<EditForm />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
