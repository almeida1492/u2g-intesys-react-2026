import { ProjectCard } from './ProjectCard'
export const ProjectList = ({
  projects,
  onDelete,
}: {
  projects: any
  onDelete: any
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Members</th>
            <th>Columns</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project: any) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
