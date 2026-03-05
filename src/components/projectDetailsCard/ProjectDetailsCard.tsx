import type { ProjectResponse } from "../../api";
import styles from "./projectDetailsCard.module.css";

export function ProjectDetailsCard({
  project,
  onClick,
}: {
  project: ProjectResponse;
  onClick: () => void;
}) {
  return (
    <button key={project.id} className={styles.cardContainer} onClick={onClick}>
      <h2>{project.title}</h2>
      <div>{project.description}</div>
      <div>
        <b>Created by:</b> {project.createdBy?.name}{" "}
        {project.createdBy?.surname}
      </div>
      <div>
        <b>Number of cards:</b> {project.cardsNumber || 0}
      </div>
    </button>
  );
}
