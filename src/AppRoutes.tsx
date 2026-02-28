import { Route, Routes, useNavigate } from "react-router";
import { CheckAuth } from "./components/checkAuth/CheckAuth";
import { PrivateRouteLayout } from "./components/privateRouteLayout/PrivateRouteLayout";
import { PublicRouteLayout } from "./components/publicRouteLayout/PublicRouteLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { KanbanBoard } from "./pages/kanbanBoard/KanbanBoard";
import { Login } from "./pages/login/Login";
import { ProjectForm } from "./components/projectForm/ProjectForm";
import { Register } from "./pages/register/Register";
import { Settings } from "./pages/settings/Settings";
import NotFound from "./pages/notFound/NotFound";
import { projectApi } from "./services";

function ProjectFormPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: { title: string; description: string }) => {
    try {
      await projectApi.createProject({
        projectRequest: {
          title: values.title,
          description: values.description,
        },
      });
      navigate(-1);
    } catch (error) {
      console.error("Error creating project", error);
    }
  };

  return (
    <ProjectForm
      handleSubmit={handleSubmit}
      onClose={() => navigate(-1)}
    />
  );
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckAuth />} />
      <Route
        path="/login"
        element={
          <PublicRouteLayout>
            <Login />
          </PublicRouteLayout>
        }
      />
      <Route
        path="register"
        element={
          <PublicRouteLayout>
            <Register />
          </PublicRouteLayout>
        }
      />
      <Route path="dashboard" element={<PrivateRouteLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects/:id" element={<KanbanBoard />} />
        <Route path="projects/create" element={<ProjectFormPage />} />
        <Route path="projects/update/:id" element={<ProjectFormPage />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};