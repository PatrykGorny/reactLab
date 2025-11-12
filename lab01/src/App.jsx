import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Lab01 from "./pages/Lab01";
import Lab02 from "./pages/Lab02";
import NotFound from "./pages/NotFound";
import Lab03 from "./pages/Lab3Page";
import AddForm from "./component/AddForm";
import EditForm from "./component/EditForm";
import AppProvider from "./component/AppProvider";
import Lab05 from "./pages/Lab05Page";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="lab01" element={<Lab01 />} />
            <Route path="lab02" element={<Lab02 />} />
            <Route path="lab02/:id" element={<Lab02 />} />
            <Route path="lab03" element={<Lab03 />} />
            <Route path="lab04/add" element={<AddForm />} />
            <Route path="lab04/edit/:id" element={<EditForm />} />
            <Route path="lab05" element={<Lab05 />} />
            <Route path="lab05/users/:id" element={<UserDetailsPage />} />
            <Route
              path="lab05/posts/:id/comments"
              element={<PostCommentsPage />}
            />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
