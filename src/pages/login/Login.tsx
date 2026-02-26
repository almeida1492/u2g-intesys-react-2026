import { useState } from "react";
import { useNavigate } from "react-router";
import globalStyles from "../../globals.module.css";
import styles from "./login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!res.ok) {
        alert("Nom d’utilisateur ou mot de passe incorrect");
        return;
      }

      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      goToProjects();

      goToProjects();
    } catch (err) {
      console.error(err);
      alert("Erreur serveur");
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
            ></input>
          </div>
          <div className={styles.textField}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="password"
              id="password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};
