type Column = { id: number; title: string };

type Project = {
  id: number;
  title: string;
  description: string;
  members: string;
  columns: Column[];
};

type SidebarProps = {
  projects?: Project[];
  deleteProject?: (id: number) => void;
};

export function Sidebar({ projects, deleteProject }: SidebarProps) {
  console.log("Sidebar rendered with projects:", projects);
  return (
    <ul>
      {projects?.map((project) => (
        <li key={project.id}>
          {project.title}
          {deleteProject && <button onClick={() => deleteProject(project.id)}>Delete</button>}
        </li>
      ))}
    </ul>
  );
}