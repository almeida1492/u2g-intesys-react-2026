export const ProjectCard = ({
  project,
  onDelete,
}: {
  project: {
    id: number
    members: string
    title: string
    description?: string
    columns: { id: number; title: string }[]
  }
  onDelete: any
}) => {
  return (
    <tr>
      <td>{project.title}</td>
      <td>{project.description}</td>
      <td>{project.members}</td>
      <td>{project.columns.map((col) => col.title).join(', ')}</td>
      <td>
        <button onClick={() => onDelete(project.id)}>Delete</button>
      </td>
    </tr>
  )
}
