import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import globalStyles from "../../globals.module.css";
import { projectApi } from "../../services";
import { TextField } from "../../components/textField/TextField";
import { useDebounce } from "../../hooks/useDebounce";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data: projects, isFetching } = useQuery({
    queryKey: ["projects", debouncedSearch],
    queryFn: () =>
      projectApi.getAllProjects({
        search: debouncedSearch || undefined,
      }),
  });

  return (
    <main className={globalStyles.main}>
      <h1>Dashboard</h1>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="settings">Settings</Link>
        <Link to="projects/create">Create Project</Link>
      </nav>

      <TextField
        label="Search projects"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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