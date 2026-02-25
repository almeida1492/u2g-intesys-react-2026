import { useState } from 'react'

export function ProjectForm({
  handleSubmit,
}: {
  handleSubmit: (values: {
    title: string
    description?: string
    members?: string
    columns?: { id: number; title: string }[]
  }) => void
}) {
  type FormErrors = {
    title?: string
    description?: string
    members?: string
    columns?: string[]
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [members, setMembers] = useState('')
  const [columns, setColumns] = useState([{ id: Date.now(), title: '' }])
  const [errors, setErrors] = useState<FormErrors>({})

  const addColumn = () => {
    setColumns([...columns, { id: Date.now(), title: '' }])
  }

  const handleColumnChange = (id: number, value: string) => {
    setColumns(
      columns.map((col) => (col.id === id ? { ...col, title: value } : col)),
    )
  }

  //validate form
  const validateForm = () => {
    let newerrors: FormErrors = {}
    if (!title.trim()) {
      newerrors.title = 'Project title is required'
    }
    if (!members.trim()) {
      newerrors.members = 'Project members are required'
    }

    if (!description.trim()) {
      newerrors.description = 'Project description is required'
    }
    const columnErrors = columns.map((col) =>
      !col.title.trim() ? 'Column title is required' : '',
    )
    if (columnErrors.some((err) => err)) {
      newerrors.columns = columnErrors
    }

    setErrors(newerrors)
    return Object.keys(newerrors).length === 0
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const isValid = validateForm()
        if (!isValid) return
        handleSubmit({ title, description, members, columns })
        setTitle('')
        setDescription('')
        setMembers('')
        setColumns([{ id: Date.now(), title: '' }])
        setErrors({})
      }}
    >
      <h2>Create New Project</h2>
      <input
        type='text'
        id='title'
        name='title'
        placeholder='Project Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <span>{errors.title}</span>}
      <textarea
        id='description'
        name='description'
        placeholder='Project Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && <span>{errors.description}</span>}
      <input
        type='text'
        id='members'
        name='members'
        placeholder='Project Members'
        value={members}
        onChange={(e) => setMembers(e.target.value)}
      />
      {errors.members && <span>{errors.members}</span>}

      {columns.map((col, index) => (
        <div key={col.id}>
          <input
            type='text'
            name='columnTitle'
            placeholder='Column Title'
            value={col.title}
            onChange={(e) => handleColumnChange(col.id, e.target.value)}
          />
          {errors.columns && errors.columns[index] && (
            <span>{errors.columns[index]}</span>
          )}
        </div>
      ))}
      <span>This field is required</span>
      <button type='button' onClick={addColumn}>
        Add Column
      </button>
      <button type='submit'>Create</button>
    </form>
  )
}
