import { useNavigate } from "react-router";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>

      <h2 className={styles.title}>Page not found</h2>

      <p className={styles.text}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <button className={styles.button} onClick={handleGoBack}>
        Go back to dashboard
      </button>
    </div>
  );
}