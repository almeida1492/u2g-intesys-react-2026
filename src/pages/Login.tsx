import { useState } from "react";
import styles from "./login.module.css";

export const Login = ({ setIsLogged }: { setIsLogged: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    console.log("Username", username, "Password", password);
    setIsLogged();
  };

  return (
    <div className={styles.LoginContainer}>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
              type="text"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
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
    </div>
  );
};
