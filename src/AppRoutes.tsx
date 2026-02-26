import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { Projects } from "./pages/projects/Projects";
import { Register } from "./pages/register/Register";
import { Settings } from "./pages/settings/Settings";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="projects/:id" element={<Projects></Projects>}></Route>
          <Route path="projects/create" element={<Projects></Projects>}></Route>
          <Route
            path="projects/update/:id"
            element={<Projects></Projects>}
          ></Route>
          <Route path="setting" element={<Settings></Settings>}></Route>

          <Route path="*" element={<Navigate to="/login" replace />}></Route>
        </Route>
      </Routes>
    </>
  );
};
