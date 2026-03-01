import { useState } from "react";
import { useNavigate } from "react-router";
import globalStyles from "../../globals.module.css";
import { apiService } from "../../services/api";
import styles from "./login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiService.login(username, password);

      if (!response.token) {
        throw new Error("No token received");
      }

      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={`${globalStyles.main} ${styles.loginContainer}`}>
      <div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
              type="text"
              required
            />
          </div>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
};