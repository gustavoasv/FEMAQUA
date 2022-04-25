import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewToolForm } from "./pages/NewTollForm";
import { RequireAuth } from "./RequireAuth";

export const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/newtool"
        element={
          <RequireAuth>
            <NewToolForm />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
