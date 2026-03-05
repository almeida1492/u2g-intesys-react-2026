import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import globalStyles from '../../globals.module.css'
import { projectApi } from '../../services'
import { TextField } from '../../components/textField/TextField'
import { useDebounce } from 'use-debounce'
import { useMemo, useState } from 'react'

export function Dashboard() {
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 500)

  const { data: projects, isFetching } = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectApi.getAllProjects(),
  })

  const filteredProjects = useMemo(() => {
    if (!projects) return []
    if (!debouncedSearch.trim()) return projects
    const query = debouncedSearch.toLowerCase()
    return projects.filter(
      (project) =>
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query),
    )
  }, [projects, debouncedSearch])
  return (
    <main className={globalStyles.main}>
      <h1>Dashboard</h1>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to='settings'>Settings</Link>
        <Link to='projects/1'>Project 1</Link>
        <Link to='projects/2'>Project 2</Link>
        <Link to='projects/create'>Create Project</Link>
        <Link to='projects/update/1'>Update Project</Link>
      </nav>

      <TextField
        label='Search projects'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Type to search...'
      />

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        filteredProjects?.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </main>
  )
}
