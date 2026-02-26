import { Route, Routes } from 'react-router'
import { CheckAuth } from './components/checkAuth/CheckAuth'
import { PrivateRouteLayout } from './components/privateRouteLayout/PrivateRouteLayout'
import { PublicRouteLayout } from './components/publicRouteLayout/PublicRouteLayout'
import { Dashboard } from './pages/dashboard/Dashboard'
import { KanbanBoard } from './pages/kanbanBoard/KanbanBoard'
import { Login } from './pages/login/Login'
import { ProjectForm } from './components/projectForm/ProjectForm'
import { Register } from './pages/register/Register'
import { Settings } from './pages/settings/Settings'
import { NotFound } from './pages/notFound/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CheckAuth />} />

      <Route
        path='/login'
        element={
          <PublicRouteLayout>
            <Login />
          </PublicRouteLayout>
        }
      />

      <Route
        path='register'
        element={
          <PublicRouteLayout>
            <Register />
          </PublicRouteLayout>
        }
      />

      <Route path='dashboard' element={<PrivateRouteLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='projects/:id' element={<KanbanBoard />} />
        <Route
          path='projects/create'
          element={<ProjectForm handleSubmit={() => {}} />}
        />
        <Route
          path='projects/update/:id'
          element={<ProjectForm handleSubmit={() => {}} />}
        />
        <Route path='settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
