import { createBrowserRouter } from "react-router";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { PrivateRouteLayout } from "./components/privateRouteLayout/PrivateRouteLayout";
import { PublicRouteLayout } from "./components/publicRouteLayout/PublicRouteLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { KanbanBoard } from "./pages/kanbanBoard/KanbanBoard";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Settings } from "./pages/settings/Settings";
import { ProjectsPage } from "./pages/projects/Projects";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRouteLayout>
        <Login />
      </PublicRouteLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRouteLayout>
        <Register />
      </PublicRouteLayout>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <PrivateRouteLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "projects", element: <ProjectsPage /> },
      
      { path: "projects/:id", element: <KanbanBoard /> },
      {
        path: "settings",
        element: <Settings />,
        errorElement: <div>Something went wrong. Retry later.</div>,
      },
    ],
  },
]);
