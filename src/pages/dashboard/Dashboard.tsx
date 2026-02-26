import { Link, useNavigate, useParams } from "react-router";
import globalStyles from "../../globals.module.css";

export function Dashboard() {
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
    </main>
  );
}
