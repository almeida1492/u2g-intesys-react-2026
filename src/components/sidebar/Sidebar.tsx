import { Link, useNavigate } from "react-router";
import styles from "./sidebar.module.css";
import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../../services";
import { useProjects } from "../../queries/useProjects";
import globalStyles from "../../globals.module.css";
import { Button } from "../button/Button";

export function Sidebar() {
  const navigate = useNavigate();

  const { projects, isFetching } = useProjects();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <div>Projects</div>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          projects?.map((project) => (
            <Link
              className={styles.link}
              key={project.id}
              to={`projects/${project.id}`}
            >
              {project.title}
            </Link>
          ))
        )}
        <div className={globalStyles.divider}></div>
        <Link className={styles.link} to="/">
          Dashboard
        </Link>
        <Link className={styles.link} to="settings">
          Settings
        </Link>
        <Link to="login">
          <Button asChild onClick={() => localStorage.removeItem("token")}>
            Log out
          </Button>
        </Link>
      </nav>
    </aside>
  );
}
