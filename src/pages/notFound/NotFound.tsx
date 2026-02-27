import { useNavigate } from "react-router";
import styles from "./notFound.module.css";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>Page non trouvée</h2>
        <p className={styles.errorDescription}>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className={styles.buttonContainer}>
          <button 
            onClick={() => navigate("/dashboard")}
            className={styles.primaryButton}
          >
            Retour au tableau de bord
          </button>
          <button 
            onClick={() => navigate(-1)}
            className={styles.secondaryButton}
          >
            Page précédente
          </button>
        </div>
      </div>
    </main>
  );
};
