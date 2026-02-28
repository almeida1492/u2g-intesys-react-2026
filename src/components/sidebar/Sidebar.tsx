import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  return (
    <ul>
      {projects?.map((project) => (
        <li key={project.id}>
          <span 
            onClick={() => navigate(`/dashboard/projects/${project.id}`)}
            style={{ cursor: "pointer" }}
          >
            {project.title}
          </span>
          {deleteProject && (
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}