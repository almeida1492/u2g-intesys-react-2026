import { useState } from 'react'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Login } from './pages/Login'
import { ProjectForm } from './components/projectForm/ProjectForm'
import { ProjectList } from './components/projectForm/ProjectList'

export function App(props: { a: string }) {
  const [isLogged, setIsLogged] = useState(false)
  const [projects, setProjects] = useState<
    { id: number; title: string; description?: string }[]
  >([])

  const changeLogState = () => {
    setIsLogged(true)
  }

  const addProject = (values: {
    title: string
    description?: string
    members?: string
    columns?: any[]
  }) => {
    setProjects([...projects, { ...values, id: Date.now() }])
  }

  const deleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <>
      <Header />
      <Sidebar />

      <ProjectList projects={projects} onDelete={deleteProject} />
      <ProjectForm handleSubmit={addProject} />
    </>
  )
}
