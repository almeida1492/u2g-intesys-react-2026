import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { TextField } from "../../components/textField/TextField";
import { useProjects } from "../../queries/useProjects";
import { ProjectDetailsCard } from "../../components/projectDetailsCard/ProjectDetailsCard";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const navigate = useNavigate();

  const { projects, isFetching } = useProjects();

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (!debouncedSearch.trim()) return projects;
    const query = debouncedSearch.toLowerCase();
    return projects.filter(
      (project) =>
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query),
    );
  }, [projects, debouncedSearch]);

  return (
    <>
      <h1>Dashboard</h1>

      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search..."
      />

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.projectsGrid}>
          {filteredProjects?.map((project) => (
            <ProjectDetailsCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/projects/${project.id}`)}
            />
          ))}
        </div>
      )}
    </>
  );
}