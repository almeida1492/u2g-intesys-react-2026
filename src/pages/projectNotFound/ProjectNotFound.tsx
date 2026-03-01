import { useNavigate } from "react-router";
import styles from "./projectNotFound.module.css";

export const ProjectNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.projectNotFoundContainer}>
      <div className={styles.projectNotFoundContent}>
        <h1 className={styles.errorIcon}>📁j</h1>
        <h2 className={styles.errorMessage}>Projet non trouvé</h2>
        <p className={styles.errorDescription}>
          Le projet que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <div className={styles.buttonContainer}>
          <button 
            onClick={() => navigate("/dashboard")}
            className={styles.primaryButton}
          >
            Voir tous les projets
          </button>
          <button 
            onClick={() => navigate("/dashboard/projects/create")}
            className={styles.secondaryButton}
          >
            Créer un nouveau projet
          </button>
        </div>
      </div>
    </main>
  );
};
