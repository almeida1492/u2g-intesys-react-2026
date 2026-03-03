import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import globalStyles from "../../globals.module.css";
import { projectApi } from "../../services";

export function Dashboard() {
  const { data: projects, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getAllProjects(),
  });

  return (
    <main className={globalStyles.main}>
      <h1>Dashboard</h1>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="settings">Settings</Link>
        <Link to="projects/1">Project 1</Link>
        <Link to="projects/2">Project 2</Link>
        <Link to="projects/create">Create Project</Link>
        <Link to="projects/update/1">Update Project</Link>
      </nav>

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        projects?.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </main>
  );
}
