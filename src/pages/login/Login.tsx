import { useEffect, useState } from "react";
import styles from "./login.module.css";
import globalStyles from "../../globals.module.css";

export const Login = ({ goToProjects }: { goToProjects: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 


 /* const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // We're pretending that we've got a token from the server and that the login was successful;
        goToProjects();
      });
  }; */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setIsLoading(true);
   

    fetch("http://localhost:5432/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          goToProjects();
        } 
      })
      
      .finally(() => {
        setIsLoading(false);
      });
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
