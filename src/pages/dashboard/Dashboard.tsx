import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import globalStyles from "../../globals.module.css";
import { projectApi } from "../../services";
import { TextField } from "../../components/textField/TextField";
import { useState, useEffect } from "react";

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { data: projects = [], isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getAllProjects(),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredProjects = projects.filter(
    (project) =>
      project.title &&
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

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

      <TextField
        label="Search project"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        filteredProjects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </main>
  );
}
