import { Route, Routes } from "react-router";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { PrivateRouteLayout } from "./components/privateRouteLayout/PrivateRouteLayout";
import { ProjectForm } from "./components/projectForm/ProjectForm";
import { PublicRouteLayout } from "./components/publicRouteLayout/PublicRouteLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { KanbanBoard } from "./pages/kanbanBoard/KanbanBoard";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Settings } from "./pages/settings/Settings";
import { projectApi } from "./services";
import { NewProject } from "./pages/newProject/NewProject";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRouteLayout>
            <Login />
          </PublicRouteLayout>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRouteLayout>
            <Register />
          </PublicRouteLayout>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <PrivateRouteLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects/:id" element={<KanbanBoard />} />
        <Route path="projects/create" element={<NewProject />} />
        <Route
          path="projects/update/:id"
          element={<ProjectForm handleSubmit={() => {}} />}
        />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
