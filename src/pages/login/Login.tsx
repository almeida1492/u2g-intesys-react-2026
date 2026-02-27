import { useState } from "react";
import { useNavigate } from "react-router";
import globalStyles from "../../globals.module.css";
import { userApi } from "../../services";
import styles from "./login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await userApi.login({
        loginRequest: { username, password },
      });
      if (!response.token) {
        throw new Error("No token received");
      }
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
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
